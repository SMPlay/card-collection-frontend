import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { SpiderManCard } from "../../../types/spider-man-card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    metaText: {
      padding: "0 15px"
    },
  })
);

export const CollectionCard: FC<SpiderManCard> = ({imageUrl, kind, name, number, type, need, have}) => {
  const styles = useStyles();

  return <Card>
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
        Номер карты: {number}
      </Typography>
      <Typography variant="h6" component="h5">
        Тип карты: {type}
      </Typography>
      <Typography variant="h6" component="h5">
        Раздел: {kind}
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