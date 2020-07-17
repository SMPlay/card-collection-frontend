import { gql } from "@apollo/client";

export const GET_SPIDER_MAN_CARDS = gql`
    query spiderManCards($from: Int!,$limit: Int,$collectionPart: Int!){
        spiderManCards(from: $from,limit: $limit, collectionPart: $collectionPart) {
            id name imageUrl type kind need have number 
        }
    }
`;
