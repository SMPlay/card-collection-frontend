import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

import { FormikType } from "../../../types/FormikType";
import { checkErrorByField } from "../../../utils";

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
  })
);

export interface Values {
  email?: string;
}

export const ResetPasswordEmail: React.FC<FormikType<Values>> = ({
  handleSubmit,
  handleChange,
  values,
  status,
  errors,
}) => {
  const styles = useStyles();

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <TextField
        id="email"
        value={values.email}
        onChange={handleChange}
        label="Email"
        placeholder="Введите email"
        variant="outlined"
        error={
          errors.email ||
          status?.error === "Пользователя с таким email не существует"
            ? true
            : false
        }
        helperText={
          checkErrorByField("resetEmail", status?.error)
            ? status?.error
            : errors.email
        }
        required
        disabled={status?.loading}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={status?.loading}
      >
        Отправить сообщение об восстановлении
      </Button>
    </form>
  );
};
