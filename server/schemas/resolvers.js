const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Teammate } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    allProjects: async () => {
      return await Project.find();
    },
    userProjects: async (parent, args, context) => {
      return await Project.find({ owner: context.user._id });
    },
    user: async (parent, args, context) => {
      return await User.findById(context.user._id);
    },
    project: async (parent, { projectId }) => {
      return await Project.find({ _id: projectId }).populate('team');
    },
    team: async (parent, { project }) => {
      return await Teammate.find({ project: project });
    },
    investments: async (parent, args, context) => {
      return await Project.find({ investors: context.user._id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addProject: async (parent, args) => {
      return await Project.create(args);
    },
    addTeammate: async (parent, args) => {
      return await Teammate.create(args);
    },
    updateTeammate: async (parent, args) => {
      return await Teammate.findByIdAndUpdate(args, { new: true });
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
    }
  }
}

module.exports = resolvers;