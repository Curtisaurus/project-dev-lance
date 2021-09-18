const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Teammate, Investment } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    allProjects: async () => {
      return await Project.find().limit(12).populate('owner', 'username');
    },
    userProjects: async (parent, args, context) => {
      return await Project.find({ owner: context.user._id }).populate('owner', 'username');
    },
    projectSearch: async (parent, args) => {
      return await Project.find({ $or: [{ name: { $in: args }}, { tags: { $in: args }}] }).populate('owner', 'username');
    },
    user: async (parent, { _id }) => {
      return await User.findById(_id).populate('projects').populate({ path: 'investments', populate: {path: 'project', select: 'name _id'}});
    },
    project: async (parent, { _id }) => {
      let project = await Project.findById(_id)
        .populate('owner', 'username')
        .populate({ 
          path:'team',
          select: 'role user',
          populate: {
            path: 'user',
            select: 'username'
          }
        })
        .populate({
          path: 'investors',
          select: 'user amount',
          populate: {
            path: 'user',
            select: 'username'
          }
        });
      return project
    },
    team: async (parent, { project }) => {
      return await Teammate.find({ project: project }).populate('user', 'username');
    },
    investments: async (parent, args, context) => {
      return await Investment.find({ user: context.user._id}).populate('project', "name _id");
    }
  },
  Mutation: {
    addinvestment: async (parent, args) => {
      const investments = await Investment.create(args);
      return investments;
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addProject: async (parent, args, context) => {
      console.log(context.user)
      let project = await Project.create(args);
      return project;
    },
    addTeammate: async (parent, args) => {
      return await Teammate.create(args);
    },
    updateTeammate: async (parent, { _id }, context) => {
      return await Teammate.findByIdAndUpdate(_id, {user: context.user._id}, { new: true });
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProject: async (parent, args) => {
      return await Project.findByIdAndUpdate(args, { new: true });
    },
    updateTags: async (parent, args) => {
      return await Project.findByIdAndUpdate(args, { $push: { tags: args.tags}})
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addFunding: async (parent, { project, funding }) => {
      return await Project.findByIdAndUpdate(project, { $inc: { acqFunds: funding }});
    }
  }
}

module.exports = resolvers;