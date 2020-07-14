import React, { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const SIGNUP_USER = gql`
  mutation RegisterUser($login: String!, $password: String!) {
    registerUser(login: $login, password: $password) {
      id
    }
  }
`;

const LOGIN = gql`
  query Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      id
    }
  }
`;

export const HomePage: React.FC = () => {
  const [loginValueReg, setLoginValue] = useState("");
  const [passwordValueReg, setPasswordValue] = useState("");
  const [registerUser,{ data: regData }] = useMutation(SIGNUP_USER);

  const onClickReg = () => {
    const variables = {
      login: loginValueReg,
      password: passwordValueReg,
    };

    registerUser({ variables });
  };

  const [loginValueLog, setLoginValueLog] = useState("");
  const [passwordValueLog, setPasswordValueLog] = useState("");
  const [login ,{ data: logData }] = useLazyQuery(LOGIN, {
    variables: {
      login: loginValueLog,
      password: passwordValueLog,
    },
  });

  const onClickLogin = () => {
    const variables = {
      login: loginValueLog,
      password: passwordValueLog,
    };

    login({variables});
  };

  return (
    <main>
      <div className="container">
        <div className="row">

          <div>
            <h1>Reg</h1>
            <input
              value={loginValueReg}
              onChange={({ target: { value } }) => setLoginValue(value)}
              type="text"
            />
            <input
              value={passwordValueReg}
              onChange={({ target: { value } }) => setPasswordValue(value)}
              type="password"
            />
            <button onClick={onClickReg}>submit</button>
          </div>

          <div>
            <h1>Login: </h1>
            <div>
              <input
                value={loginValueLog}
                onChange={({ target: { value } }) => setLoginValueLog(value)}
                type="text"
              />
              <input
                value={passwordValueLog}
                onChange={({ target: { value } }) => setPasswordValueLog(value)}
                type="password"
              />
              <button onClick={onClickLogin}>submit</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
