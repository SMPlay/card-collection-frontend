import { gql } from "@apollo/client";

export const SET_USER_AVATAR = gql`
  mutation SetAvatar($id: ID!, $avatar: Upload!) {
    setAvatar(id: $id, avatar: $avatar) {
      id
    }
  }
`;
