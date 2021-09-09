const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Teammate {
    _id: ID
    role: String!
    user: ID
    project: ID
  }

  type Project {
    _id: ID
    name: String!
    owner: ID!
    description: String
    image: String
    reqFunds: Float!
    acqFunds: Float!
    team: [Teammate]
    investors: [User]
    tags: [String]
  }

  type User {
    _id: ID
    email: String
    githubUrl: String
    linkedinUrl: String
    projects: [Project]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    allProjects: [Project]
    userProjects(user: ID!): [Project]
    allUsers: [User]
    user: User
    team(project: ID!): [Teammate]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addProject(name: String!, owner: ID!, description: String, image: String, reqFunds: Float!): Project
    addTeammate(project: ID!, role: String!, user: ID): Teammate
    updateTeammate(_id: ID!, role: String, user: ID): Teammate
    updateUser(email: String, password: String, githubUrl: String, linkedinUrl: String): User
    updateProject(_id: ID!, name: String, description: String, image: String, reqFunds: Float): Project
    updateTags(project: ID!, tags[String]): Project
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
