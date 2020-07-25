import { gql } from "@apollo/client";

export const RESET_PASSWORD_QUERY = gql`
  mutation ResetPasswordMessage($email: String!) {
    resetPasswordMessage(email: $email) {
      id
    }
  }
`;
