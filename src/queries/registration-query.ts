import { gql } from "@apollo/client";

export const REGISTRATION_QUERY = gql`
  mutation RegisterUser($login: String!, $password: String!, $email: String!) {
    registerUser(login: $login, password: $password, email: $email) {
      id
    }
  }
`;
