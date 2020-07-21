import React from "react";
import { Typography } from "@material-ui/core";
import { create } from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

import { LoginForm, LoginFormProps } from "./login-form";
import { LOGIN } from "../../queries";

describe("login form component", () => {
  let props: LoginFormProps;
  const mocksInitial = [
    {
      request: {
        query: LOGIN,
        variables: { login: "test", password: "test" },
      },
      result: {
        data: {
          user: { id: "123" }
        },
      },
    }
  ];

  beforeEach(() => {
    props = {
      loginValue: "test",
      passwordValue: "test",
      loginError: false,
      passwordError: false,
      onChangeLogin: jest.fn(),
      onChangePassword: jest.fn(),
      onSubmit: jest.fn(),
    }
  });

  it("should render", () => {
    const tree = create(
      <MockedProvider mocks={mocksInitial}>
        <Router>
          <LoginForm {...props}/>
        </Router>
      </MockedProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should get error", () => {
    const component = mount(
      <MockedProvider mocks={mocksInitial}>
        <Router>
          <LoginForm 
            {...props}
            loginError
            passwordError
          />
        </Router>
      </MockedProvider>
    );

    expect(component.find(Typography).text()).toBe("Неправильный логин и/или пароль")
  });
});
