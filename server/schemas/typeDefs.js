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
    owner: User
    description: String
    image: String
    reqFunds: Float!
    acqFunds: Float!
    team: [Teammate]
    investors: [ID]
    tags: [String]
  }

  type User {
    _id: ID
    username: String!
    email: String!
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
    projectSearch(searchArray: [String]!): [Project]
    user: User
    project(_id: ID!): Project
    team(project: ID!): [Teammate]
    investments(user: ID!): [Project]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(name: String!, owner: ID!, description: String, image: String, reqFunds: Float!, tags: [String]): Project
    addTeammate(project: ID!, role: String!, user: ID): Teammate
    updateTeammate(_id: ID!, role: String, user: ID): Teammate
    updateUser(email: String, password: String, githubUrl: String, linkedinUrl: String): User
    updateProject(_id: ID!, name: String, description: String, image: String, reqFunds: Float): Project
    updateTags(project: ID!, tags: [String]): Project
    login(email: String!, password: String!): Auth
    addFunding(project: ID!, funding: Float!): Project
  }
`;

module.exports = typeDefs;
