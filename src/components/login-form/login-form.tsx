import React from "react";
import { TextField, Box, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

export interface LoginFormProps {
  loginValue: string;
  passwordValue: string;
  loginError: string;
  passwordError: string;
  onChangeLogin: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubmit: (login: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  loginValue,
  passwordValue,
  loginError,
  passwordError,
  onChangeLogin,
  onChangePassword,
  onSubmit,
}) => {
  const styles = useStyles();

  return (
    <form className={styles.root}>
      <Box className={styles.loginField}>
        <TextField
          value={loginValue}
          onChange={({ target: { value } }) => onChangeLogin(value)}
          label="Логин"
          placeholder="Введите логин"
          variant="outlined"
          error={loginError !== ""}
          helperText={loginError}
          required
        />
        <TextField
          value={passwordValue}
          onChange={({ target: { value } }) => onChangePassword(value)}
          label="Пароль"
          placeholder="Введите пароль"
          variant="outlined"
          type="password"
          error={passwordError !== ""}
          helperText={passwordError}
          required
        />
      </Box>
      <Box className={styles.buttonsField}>
        <Button
          onClick={() => {
            onSubmit(loginValue, passwordValue);
          }}
          variant="contained"
          color="primary"
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
