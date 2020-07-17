import { gql } from "@apollo/client";

export const GET_COLLECTIONS_NAME = gql`
  query {
    cardCollections {
      id name
    }
  }
`;
