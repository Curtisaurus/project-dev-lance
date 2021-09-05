const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Role {
    _id: ID
    name: String
  }

  type Teammate {
    _id: ID
    role: String!
    user: ID
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
  }

  type User {
    _id: ID
    email: String
    projects: [Project]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    projects: [Project]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
