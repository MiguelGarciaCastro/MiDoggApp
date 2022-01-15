const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    city: String
    friendCount: Int
    posts: [Post]
   
  }

  type Doggo {
    _id: ID
    careTaker: [User]
    bread: String
    age: String
    socialLevel: String
    needs: String
    isBig: Boolean
  }

  type Location {
    type: String
    name: String
    region: String
    address: String
    city: String
    zip: String
    mileMarker: String
    website: String
    phone: String
    bigDogAllowed: Boolean
    dogCount: Int
    dogFee: Int
    offLeash: Boolean
    longitude: String
    latitude: String
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

  


  type Auth {
    token: ID!
    user: User
  }
type Apikey {
  value: String
}
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    env: Apikey
  }

  type Mutation {
    login(username: String!, password: String!): Auth

    addUser(username: String!, password: String!): Auth

    addPost(body: String!): Post

    addComment(postId: ID!, commentBody: String!): Post

    

    removePost(id: ID!): Post

    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
