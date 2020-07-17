import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SPIDER_MAN_CARDS } from "../queries/get-spider-man-cards";
import { Loading } from "../components/Loading/Loading";

interface SpiderManCards {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  kind: string;
  need: number;
  have: number;
  number: number;
}

interface SpiderManCardsData {
  spiderManCards: SpiderManCards[]
}

interface SpiderManCardsVariables {
  from: number;
  limit: number;
  collectionPart: number
}

export const CollectionPage = () => {
  const { data, loading } = useQuery<SpiderManCardsData, SpiderManCardsVariables>(GET_SPIDER_MAN_CARDS, {
    variables: {
      from: 5,
      limit:3,
      collectionPart:1
    }
  });
  return (
    <div>
      {loading
        ? <Loading/> :
        <div>
          {data?.spiderManCards.map(card => <div key={card.id}><img src={card.imageUrl} alt=""/></div>)}
        </div>}
    </div>
  )
}
