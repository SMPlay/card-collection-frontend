import { gql } from "@apollo/client";

export const GET_CARD_COLLECTIONS = gql`
  query {
    cardCollections {
      id name imageUrl cardsCount release
    }
  }
`;
