import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Button, TextField, Typography } from "@material-ui/core";

import { FormikType } from "../../types/FormikType";
import { checkErrorByField } from "../../utils";

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
    registrationField: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export interface Values {
  login?: string | boolean;
  email?: string | boolean;
  password?: string | boolean;
  confirmPassword?: string | boolean;
}

export const RegistrationForm: React.FC<FormikType<Values>> = ({
  handleSubmit,
  handleChange,
  values,
  status,
  errors
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
      <Box m={2} className={styles.registrationField}>
        <TextField
          id="login"
          value={values.login}
          onChange={handleChange}
          label="Логин"
          placeholder="Введите логин"
          variant="outlined"
          error={
            !!(errors.login ||
              status?.error === "Такой пользователь уже существует")
          }
          helperText={
            checkErrorByField("regLogin", status?.error)
              ? status?.error
              : errors.login
          }
          required
          disabled={status?.loading}
        />
        <TextField
          id="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="Введите email"
          variant="outlined"
          error={
            !!(errors.email ||
              status?.error === "Пользователь с такие email уже существует")
          }
          helperText={
            checkErrorByField("regEmail", status?.error)
              ? status?.error
              : errors.email 
          }
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
          error={!!errors.password}
          helperText={errors.password}
          required
          disabled={status?.loading}
        />
        <TextField
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          label="Пароль ещё раз"
          placeholder="Введите пароль снова"
          variant="outlined"
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          required
          disabled={status?.loading}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={status?.loading}
      >
        Регистрация
      </Button>
    </form>
  );
};
