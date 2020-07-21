import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { client } from "../store";
import { LoginForm } from "../components";
import { LOGIN, IS_AUTH } from "../queries";

export const LoginPage: React.FC = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [goLogin] = useMutation(LOGIN, { errorPolicy: "all" });
  const history = useHistory();

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
      return;
    }

    client.writeQuery({
      query: IS_AUTH,
      data: {
        isAuth: true
      }
    });

    history.push("/");
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
