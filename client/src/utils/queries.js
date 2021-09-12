import { gql } from '@apollo/client';

export const QUERY_PROJECT = gql`
  query getProjects($project: ID) {
    projects(_id: $project) {
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
      investors {
        name
      }
      tags
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
      team {
        role
        user
      }
      investors
      tags
    }
  }
`;

export const QUERY_SEARCH_PROJECTS = gql`
  query searchProjects($searchArray: [String]) {
    projectbyTag(searchArray: $searchArray) {
      _id
      name
      owner {
        name
      }
      description
      image
      reqFunds
      acqFunds
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
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
    }
  }
`;
