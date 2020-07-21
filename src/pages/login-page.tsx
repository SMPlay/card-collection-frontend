import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useMutation } from "@apollo/client";

import { LoginForm } from "../components";
import { LOGIN } from "../queries";

export const LoginPage: React.FC = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [goLogin, { loading }] = useMutation(LOGIN, { errorPolicy: "all" });

  const onChangeLogin = (value: string) => {
    setLoginValue(value);
    setLoginError(false);
  }

  const onChangePassword = (value: string) => {
    setPasswordValue(value);
    setPasswordError(false);
  }

  const onSubmit = async (login: string, password: string) => {
    if (login === "" && password === "") {
      setLoginError(true);
      setPasswordError(true);
      return;
    } else if (password === "") {
      setPasswordError(true);
      return;
    } else if (login === "") {
      setLoginError(true);
      return;
    }

    const { errors } = await goLogin({ variables: { login, password } });

    if (errors !== undefined) {
      const [error] = errors;

      if (error?.extensions?.exception.status === 403) {
        setLoginError(true);
        setPasswordError(true);
      }
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
