import React from "react";
import { TextField, Box, Button, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { FormikType } from "../../types/FormikType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "60ch",
      },
    },
    loginField: {
      display: "flex",
      flexDirection: "column",
    },
    buttonsField: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    navLink: {
      marginLeft: 10,
      color: "#000",
      opacity: 1,
      transition: "opacity .2s ease",
      "&:hover": {
        opacity: 0.8,
      },
    },
  })
);

export interface Values {
  login?: string | boolean;
  password?: string | boolean;
}

export const LoginForm: React.FC<FormikType<Values>> = ({
  handleSubmit,
  handleChange,
  values,
  status,
  errors,
}) => {
  const styles = useStyles();

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      {status?.error ? (
        <Typography variant="h4" component="h2">
          {status.error}
        </Typography>
      ) : (
        ""
      )}
      <Box m={2} className={styles.loginField}>
        <TextField
          id="login"
          value={values.login}
          onChange={handleChange}
          label="Логин"
          placeholder="Введите логин"
          variant="outlined"
          error={errors.login || status?.error ? true : false}
          helperText={errors.login}
          required
          disabled={status?.loading}
        />
        <TextField
          id="password"
          value={values.password}
          onChange={handleChange}
          label="Пароль"
          placeholder="Введите пароль"
          variant="outlined"
          type="password"
          error={errors.password || status?.error ? true : false}
          helperText={errors.password}
          required
          disabled={status?.loading}
        />
      </Box>
      <Box className={styles.buttonsField}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={status?.loading}
        >
          Войти
        </Button>
        <Link className={styles.navLink} to="/reset-password">
          Забыли пароль?
        </Link>
      </Box>
    </form>
  );
};
