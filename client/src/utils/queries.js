import { gql } from '@apollo/client';

export const QUERY_PROJECT = gql`
  query getProjects($project: ID) {
    project(_id: $project) {
      _id
      name
      owner {
        username
      }
      description
      image
      reqFunds
      acqFunds
      team {
        role
        user {
          username
        }
      }
      investors {
        user {
          username
        }
        amount
      }
      tags
      launch
      createdAt
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PROJECTS = gql`
  query allProjects {
    allProjects {
      _id
      name
      owner {
        username
      }
      description
      image
      reqFunds
      acqFunds
      tags
      launch
      createdAt
    }
  }
`;

export const QUERY_SEARCH_PROJECTS = gql`
  query searchProjects($searchArray: [String]) {
    projectSearch(searchArray: $searchArray) {
      _id
      name
      owner {
        username
      }
      description
      image
      reqFunds
      acqFunds
      tags
      launch
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      githubUrl
      linkedinUrl
      projects {
        name
        description
        image
        reqFunds
        acqFunds
      }
      investments {
        project {
          _id
          name
        }
        amount
      }
    }
  }
`;
