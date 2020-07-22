import { gql } from "@apollo/client";

export const REGISTRATION_QUERY = gql`
  mutation RegisterUser($login: String!, $password: String!) {
    registerUser(login: $login, password: $password) {
      id
    }
  }
`;
