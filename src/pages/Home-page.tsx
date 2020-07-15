import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/client";

import { Welcome } from "../components";
import { Collections } from "../components";
import { GET_CARD_COLLECTIONS } from "../queries";
import { CollectionType } from "../types/CollectionType";

interface CollectionData {
  cardCollections: CollectionType[];
}

export const HomePage: React.FC = () => {
  const { data, loading } = useQuery<CollectionData>(GET_CARD_COLLECTIONS);

  return (
    <main>
      <Container>
        <Welcome />
        <Grid container>
          <Typography variant="h3" component="h2">
            Все доступные коллекции
          </Typography>
          <Collections
            loading={loading} 
            collections={data?.cardCollections} />
        </Grid>
      </Container>
    </main>
  );
};
