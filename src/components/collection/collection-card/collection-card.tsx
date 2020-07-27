import React, { FC } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Card, CardActionArea, CardContent, CardMedia, createStyles, Theme, Typography } from "@material-ui/core";

import { CardType } from "../../../types/CardType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    metaText: {
      padding: "0 15px"
    },
    card: {
      height: 550,
    }
  })
);

export const CollectionCard: FC<CardType> = ({imageUrl, rarity, name, number, role, need, have}) => {
  const styles = useStyles();

  return <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={name}
        height="450"
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActionArea className={styles.metaText + " " + styles.card}>
      <Typography variant="h6" component="h5">
        Номер карты: {number}
      </Typography>
      <Typography variant="h6" component="h5">
        Роль: {role}
      </Typography>
      <Typography variant="h6" component="h5">
        Редкость: {rarity}
      </Typography>
      <Typography variant="h6" component="h5">
        Есть карт: {have}
      </Typography>
      <Typography variant="h6" component="h5">
        Нужно карт: {need}
      </Typography>
    </CardActionArea>
  </Card>
}