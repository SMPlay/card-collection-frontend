import { gql } from "@apollo/client";

export const LOGOUT = gql`
    query {
        logout{
            id
        }
    }
`;