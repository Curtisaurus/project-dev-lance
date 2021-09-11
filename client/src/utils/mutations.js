import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $owner: ID!
    $description: String
    $image: String
    $reqFunds: Float!
    $tags: [String]
  ) {
    addProject(
      name: $name
      owner: $owner
      description: $description
      image: $image
      reqFunds: $reqFunds
      tags: $tags
    ) {
      _id
      name
      owner {
        name
      }
      description
      image
      reqFunds
      acqFunds
      team {
        role
        user
      }
      investors
      tags
    }
  }
`;

export const ADD_TEAMMATE = gql`
  mutation addTeammate(
    $project: ID!
    $role: String!
    $user: ID
  ) {
    addTeammate(
      project: $project
      role: $role
      user: $user
    ) {
      project {
        name
      }
      role
      user {
        username
      }
    }
  }
`;

export const UPDATE_TEAMMATE = gql`
  mutation updateTeammate(
    $id: ID!
    $role: String!
    $user: ID
  ) {
    updateTeammate(
      _id: $id
      role: $role
      user: $user
    ) {
      project {
        name
      }
      role
      user {
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $username: String
    $email: String
    $password: String
    $github: String
    $linkedin: String
  ) {
    updateUser(
      username: $username
      email: $email
      password: $password
      githubUrl: $github
      linkedinUrl: $linkedin
    ) {
        username
        email
        githubUrl
        linkedinUrl
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $name: String
    $description: String
    $image: String
    $reqFunds: Float
  ) {
    addProject(
      name: $name
      description: $description
      image: $image
      reqFunds: $reqFunds
    ) {
      _id
      name
      owner {
        name
      }
      description
      image
      reqFunds
      acqFunds
      team {
        role
        user
      }
      investors
      tags
    }
  }
`;

export const UPDATE_TAGS = gql`
  mutation updateTags(
    $project: ID!
    $tags: [String]
  ) {
    updateTags(
      project: $project
      tags: $tags
    ) {
      _id
      name
      owner {
        name
      }
      description
      image
      reqFunds
      acqFunds
      team {
        role
        user
      }
      investors
      tags
    }
  }
`;

export const ADD_FUNDING = gql`
  mutation addFunding($project: ID! $funding: Float!) {
    addFunding(project: $project, funding: $funding) {
      _id
      name
      owner {
        name
      }
      description
      image
      reqFunds
      acqFunds
      team {
        role
        user
      }
      investors
      tags
    }
  }
`;