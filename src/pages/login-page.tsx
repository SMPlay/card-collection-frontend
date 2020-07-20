import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { LoginForm } from "../components";

export const LoginPage: React.FC = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const onChangeLogin = (value: string) => {
    setLoginValue(value);
  }

  const onChangePassword = (value: string) => {
    setPasswordValue(value);
  }

  const onSubmit = (login: string, password: string) => {
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
