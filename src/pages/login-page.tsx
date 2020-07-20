import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useMutation } from "@apollo/client";

import { LoginForm } from "../components";
import { LOGIN } from "../queries";

export const LoginPage: React.FC = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [goLogin, { error, loading }] = useMutation(LOGIN, { errorPolicy: "all" });

  const onChangeLogin = (value: string) => {
    setLoginValue(value);
  }

  const onChangePassword = (value: string) => {
    setPasswordValue(value);
  }

  const onSubmit = (login: string, password: string) => {
    if (login === "" && password === "") {
      setLoginError("Empty login");
      setPasswordError("Empty password");
      return;
    } else if (password === "") {
      setPasswordError("Empty password");
      return;
    } else if (login === "") {
      setLoginError("Empty login");
      return;
    }

    goLogin({ variables: { login, password } });

    if (error?.message === "User does not exist!") {
      setLoginError(error?.message);
    } else if (error?.message === "Password is incorrect!") {
      setLoginError("");
      setPasswordError(error?.message);
    }
  };

  return (
    <main>
      <Container>
        <LoginForm
          loginValue={loginValue}
          passwordValue={passwordValue}
          loginError={loginError}
          passwordError={passwordError}
          onChangeLogin={onChangeLogin}
          onChangePassword={onChangePassword}
          onSubmit={onSubmit}/>
      </Container>
    </main>
  );
}
