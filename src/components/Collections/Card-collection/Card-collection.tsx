import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface CardCollectionProps {
  name: string;
  imageUrl: string;
  cardsCount: number;
  release: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    metaText: {
      padding: "0 15px"
    },
  })
);

export const CardCollection: React.FC<CardCollectionProps> = ({ name, imageUrl, cardsCount, release }) => {
  const styles = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="400"
          image={imageUrl}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea className={styles.metaText}>
        <Typography variant="h6" component="h5">
          Колличество карт: {cardsCount}
        </Typography>
        <Typography variant="h6" component="h5">
          Год выпуска: {release}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
