import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ApolloError } from "@apollo/client";

import { CollectionType } from "../../types/CollectionType";
import { CardCollection } from "./Card-collection/Card-collection";
import { FetchError } from "../Fetch-error/Fetch-error";
import { Loading } from "../Loading/Loading";

export interface CollectionsProps {
  collections: CollectionType[] | undefined;
  loading: boolean;
  error: ApolloError | undefined | boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 20,
    },
  })
);

export const Collections: React.FC<CollectionsProps> = ({
  collections,
  loading,
  error
}) => {
  const styles = useStyles();

  return (
    <Grid className={styles.root} spacing={2} justify="center" container>
      {error && <Grid item><FetchError/></Grid>}
      {loading ? (
        <Grid item><Loading/></Grid>
      ) : (
        collections?.map((collection) => (
          <Grid item xs={3} key={collection.id}>
            <Link to={`/collections/${collection.id}`}>
              <CardCollection
                name={collection.name}
                imageUrl={collection.imageUrl}
                cardsCount={collection.cardsCount}
                release={collection.release}
              />
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  );
};
