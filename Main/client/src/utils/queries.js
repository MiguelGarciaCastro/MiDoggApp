import { gql } from '@apollo/client';

export const QUERY_PLACES = gql`
  query places {
    places {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      places1
      places2
      places1_votes
      places2_votes
    }
  }
`;
