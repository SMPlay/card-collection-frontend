import { gql } from "@apollo/client";

export const GET_CARDS = gql`
    query cards($from: Int!, $limit: Int!, $collectionName: String!){
        cards(from: $from, limit: $limit, collectionName: $collectionName){
            id
            name
            imageUrl
            role
            rarity
            need
            have
            number

        }

    }
`;
