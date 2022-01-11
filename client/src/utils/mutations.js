import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($body: String!) {
    addPost(body: $body) {
      _id
      body
      createdAt
      commentCount
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_CITY = gql`
  mutation addCity($id: String) {
    addCity(id: String) {
        id
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($id: ID!) {
    removePost(id: $id) {
      id
    }
  }
`;

export const ADD_GROOMER = gql`
  mutation addGroomer($id: String) {
    addGrooomer(id: String) {
        id
        address
    }
  }
`;

export const ADD_STORE = gql`
  mutation addStore($id: String) {
    addStore(id: String) {
        id
        address
    }
  }
`;

export const ADD_BEACH = gql`
  mutation addBeach($id: String) {
    addBeach(id: String) {
        id
        address
    }
  }
`;

export const ADD_VETERINARIAN = gql`
  mutation addVeterinarian($id: String) {
    addVeterinarian(id: String) {
        id
        address
    }
  }
`;

export const ADD_CAMPGROUND = gql`
  mutation addCampground($id: String) {
    addCampground(id: String) {
        id
        address
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($id: String) {
    addRestaurant(id: String) {
        id
        address
    }
  }
`;

export const ADD_HOTEL = gql`
  mutation addHotel($id: String) {
    addHotel(id: String) {
        id
        address
    }
  }
`;

export const ADD_BOARDING = gql`
  mutation addBoarding($id: String) {
    addBoarding(id: String) {
        id
        address
    }
  }
`;

export const ADD_TRAIL = gql`
  mutation addTrail($id: String) {
    addTrail(id: String) {
        id
        address
    }
  }
`;

export const ADD_PARK = gql`
  mutation addPark($id: String) {
    addPark(id: String) {
        id
        address
    }
  }
`;
