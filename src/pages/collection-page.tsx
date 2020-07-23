import React, { ChangeEvent, useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { GET_COLLECTION_AND_CARDS } from "../queries/get-collection-and-cards";
import { CollectionCard } from "../components/collection/collection-card/collection-card";
import { ReceivedError } from "../components/recieved-error/received-error";
import { Loading } from "../components/loading/loading";
import { CardType } from "../types/CardType";
import { CollectionDescription } from "../components/collection/collection-description/collection-description";
import { CardsPagination } from "../components/collection/cards-pagination/cards-pagination";
import { GET_CARDS } from "../queries/get-cards";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 20,
    },
  })
);

interface CollectionAndCardsQueryData {
  cardCollection: {
    name: string;
    imageUrl: string;
    id: string;
    cardsCount: number;
    release: number;
    cardCollectionName: string;
    cards: CardType[];
  }
}

interface CardsQueryData {
  cards: CardType[]
}

interface CardsQueryVariables {
  from: number,
  limit: number,
  collectionName: string
}

interface CollectionAndCardsQueryVariables {
  id: string
}


export const CollectionPage = () => {
  const styles = useStyles();
  const {id} = useParams();
  const [cards, setCards] = useState<CardType[]>([]);

  const {
    data: collectionAndCardsData,
    loading: loadingCollectionAndCards,
    error: errorCollectionAndCards
  } = useQuery<CollectionAndCardsQueryData, CollectionAndCardsQueryVariables>(GET_COLLECTION_AND_CARDS, {
    variables: {id}
  });

  const [ getCards, {data: cardsData} ] = useLazyQuery<CardsQueryData, CardsQueryVariables>(GET_CARDS);

  const onSelectPage = (event: ChangeEvent<unknown>, page: number) => {
    getCards({
      variables: {
        collectionName: collectionAndCardsData?.cardCollection?.cardCollectionName || '',
        from: (page - 1) * 8 + 1,
        limit: 8,
      }
    })
  };
  useEffect(() => {
    if(cardsData?.cards){
      setCards(cardsData.cards);
    }else if(collectionAndCardsData?.cardCollection.cards  && !cards.length) {
      setCards(collectionAndCardsData.cardCollection.cards)
    }
  }, [cardsData, collectionAndCardsData]);
  return (
    <Container>
      {loadingCollectionAndCards && <Grid item><Loading/></Grid>}
      {errorCollectionAndCards && <Grid item><ReceivedError/></Grid>}

      {collectionAndCardsData && !loadingCollectionAndCards && <CollectionDescription description={collectionAndCardsData.cardCollection}/>}

      <Grid className={styles.root} spacing={2} container>
        {!loadingCollectionAndCards &&
        cards.map(card => (
          <Grid item xs={3} key={card.id}>
            <CollectionCard {...card}/>
          </Grid>
        ))
        }
      </Grid>
      {collectionAndCardsData && <CardsPagination
        count={Math.ceil(collectionAndCardsData?.cardCollection.cardsCount / 8)}
        onChange={onSelectPage}
      />}

    </Container>
  )
}
