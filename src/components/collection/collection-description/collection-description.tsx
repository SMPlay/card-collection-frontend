import React, { FC } from "react";
import { CollectionType } from "../../../types/CollectionType";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  createStyles,
  Grid,
  Paper,
  Theme,
  Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface CollectionDescriptionProps {
  description: CollectionType
}

const useStyles = makeStyles(
  {
    card: {
      width: 300
    },
    description: {
    }
  }
);

export const CollectionDescription: FC<CollectionDescriptionProps> = ({description}) => {
  const styles = useStyles();

  const {release, imageUrl, cardsCount, name} = description;
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card className={styles.card}>
          <CardMedia
            component="img"
            alt={name}
            height="450"
            image={imageUrl}
            title={name}
          />
        </Card>
      </Grid>


      <Grid item className={styles.description}>
        <Typography variant="h5" component="h2">
          Название: <b>{name}</b>
        </Typography>
        <Typography variant="h5" component="h2">
          Количество карт в коллекции: <b>{cardsCount}</b>
        </Typography>
        <Typography variant="h5" component="h2">
          Дата выпуска: <b>{release}</b>
        </Typography>
      </Grid>
    </Grid>
  )
}