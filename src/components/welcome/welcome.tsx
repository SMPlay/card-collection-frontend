import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    mainMarginTop: {
      marginTop: theme.spacing(3)
    },
    welcome: {
      marginTop: theme.spacing(5)
    }
  })
);

export const Welcome: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Typography variant="h2" component="h1">
        Супергеройские коллекции
      </Typography>
      <article className={styles.welcome}>
        <Typography variant="h3" component="h3">
          Добро пожаловать на наш сайт с коллекциями карт!
        </Typography>
        <Typography className={styles.mainMarginTop} variant="body1" component="p">
          Здесь вы можете просматривать все ваши любимые карточки из детства
          из различных коллекций.
          Также на сайте реализован аукцион, на котором вы можете приобрести
          карточки у других пользователей.
        </Typography>
        <Typography className={styles.mainMarginTop} variant="body1" component="p">
          Для того, чтобы воспользоваться аукционом, достаточно зарегистрироваться
          или войти и перейти во вкладку "Аукцион" в меню.
        </Typography>
      </article>
    </>
  );
};
