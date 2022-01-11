const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    posts: [Post]
  }

  type Post {
    _id: ID
    body: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
  }

  type Address {
    street: String
    city: String
    state: String
    postalCode: String
    country: String
  }

  type City {
    id: String
    hotels: [Hotel]
    parks: [Park]
    groomers: [Groomer]
    stores: [Store]
    boarding: [Boarder]
    campgrounds: [Campground]
    beaches: [Beach]
    trails: [Trail]
    restaurants: [Restaurant]
    veterinarians: [Veterinarian]
    comments: [Comment]
  }
  
  type: Veterinarian {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Restaurant {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Trail {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Beach {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Campground {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Boarding {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Store {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Groomer {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Park {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }
  
  type: Hotel {
  id: ID
  name: String
  address: [Address]
  comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(username: String!, password: String!): Auth

    addUser(username: String!, password: String!): Auth

    addPost(body: String!): Post

    addComment(postId: ID!, commentBody: String!): Post
  }
`;

module.exports = typeDefs;
