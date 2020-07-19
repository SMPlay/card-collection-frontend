import React from "react";
import { useQuery } from "@apollo/client";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import { GET_SPIDER_MAN_CARDS } from "../queries/get-spider-man-cards";
import { Loading } from "../components/Loading/Loading";
import { SpiderManCard } from "../types/spider-man-card";
import { ReceivedError } from "../components/Recieved-error/Received-error";
import { CollectionCard } from "../components/collection/collection-card/collection-card";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 20,
    },
  })
);

interface CardsQueryData {
  spiderManCards: SpiderManCard[]
}

interface CardsQueryVariables {
  from: number;
  limit: number;
  collectionPart: number
}

export const CollectionPage = () => {
  const styles = useStyles();

  const {data, loading, error} = useQuery<CardsQueryData, CardsQueryVariables>(GET_SPIDER_MAN_CARDS, {
    variables: {
      from: 1,
      limit: 10,
      collectionPart: 1
    }
  });
  return (
    <Container>
      <Grid className={styles.root} spacing={2} container>
        {error && <Grid item><ReceivedError/></Grid>}
        {loading ? (
          <Grid item><Loading/></Grid>
        ) : (
          data?.spiderManCards.map(({id, name, kind, number, type, imageUrl, have, need}) => (
            <Grid item xs={3} key={id}>
              <CollectionCard name={name} imageUrl={imageUrl} kind={kind} number={number} type={type} have={have}
                              need={need}/>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}
