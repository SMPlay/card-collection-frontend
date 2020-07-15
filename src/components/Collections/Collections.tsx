import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { CollectionType } from "../../types/CollectionType";
import { CardCollection } from "./Card-collection/Card-collection";

interface CollectionsProps {
  collections: CollectionType[] | undefined;
  loading: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20,
    },
  })
);

export const Collections: React.FC<CollectionsProps> = ({
  collections,
  loading,
}) => {
  const styles = useStyles();

  return (
    <Grid className={styles.root} spacing={2} container>
      {loading ? (
        <h1>Loading...</h1>
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
