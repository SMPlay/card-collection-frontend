import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Button, TextField, Typography } from "@material-ui/core";

import { AuthType } from "../../types/AuthType";

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
    buttonsField: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  })
);

export interface Values {
  login?: string | boolean;
  password?: string | boolean;
  confirmPassword?: string | boolean;
}

export const RegistrationForm: React.FC<AuthType<Values>> = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  status,
  errors,
  touched,
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
          onBlur={handleBlur}
          label="Логин"
          placeholder="Введите логин"
          variant="outlined"
          error={
            errors.login ||
            status?.error === "Такой пользователь уже существует"
              ? true
              : false
          }
          helperText={
            status?.error === "Такой пользователь уже существует"
              ? status?.error
              : ""
          }
          required
          disabled={status?.loading}
        />
        <TextField
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Пароль"
          placeholder="Введите пароль"
          variant="outlined"
          type="password"
          error={errors.password ? true : false}
          helperText={errors.password}
          required
          disabled={status?.loading}
        />
        <TextField
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Пароль ещё раз"
          placeholder="Введите пароль снова"
          variant="outlined"
          type="password"
          error={errors.confirmPassword ? true : false}
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
