const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Places {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    places: [Places]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(places1: String!, places2: String!): Matchup
    createVote(_id: String!, placesNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
