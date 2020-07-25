import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Button, TextField, Typography } from "@material-ui/core";

import { FormikType } from "../../../types/FormikType";

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
    newPasswordField: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export interface Values {
  newPassword?: string;
  confirmNewPassword?: string;
}

export const NewPasswordForm: React.FC<FormikType<Values>> = ({
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
          {status?.error}
        </Typography>
      ) : (
        ""
      )}
      <Box m={2} className={styles.newPasswordField}>
        <TextField
          id="newPassword"
          value={values.newPassword}
          onChange={handleChange}
          label="Новый пароль"
          placeholder="Введите новый пароль"
          variant="outlined"
          type="password"
          error={errors.newPassword ? true : false}
          helperText={errors.newPassword}
          required
          disabled={status?.loading}
        />
        <TextField
          id="confirmNewPassword"
          value={values.confirmNewPassword}
          onChange={handleChange}
          label="Пароль ещё раз"
          placeholder="Введите пароль снова"
          variant="outlined"
          type="password"
          error={errors.confirmNewPassword ? true : false}
          helperText={errors.confirmNewPassword}
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
        Установить новый пароль
      </Button>
    </form>
  );
};
