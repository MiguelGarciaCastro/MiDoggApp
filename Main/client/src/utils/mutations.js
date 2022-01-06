import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(places1: $places1, places2: $places2) {
      _id
      places1
      places2
    }
  }
`;

