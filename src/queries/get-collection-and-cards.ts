import { gql } from "@apollo/client";

export const GET_COLLECTION_AND_CARDS = gql`
    query cardCollection($id: ID!){
        cardCollection(id: $id){
            id
            name
            cardCollectionName
            imageUrl
            cardsCount
            release
            cards{
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
    }
`;
