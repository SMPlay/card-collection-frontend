import { gql } from "@apollo/client";

export const SET_NEW_PASSWORD = gql`
  mutation ResetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword) {
      id
    }
  }
`;
