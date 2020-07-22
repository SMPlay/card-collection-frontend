import { gql } from "@apollo/client";

export const GET_REFRESH_TOKEN = gql`
  mutation {
    refreshToken {
      id
    }
  }
`;
