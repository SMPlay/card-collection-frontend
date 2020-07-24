import React from "react";
import { Typography } from "@material-ui/core";
import { create } from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

import { LoginForm, Values } from "./login-form";
import { LOGIN } from "../../queries";
import { AuthType } from "../../types/AuthType";

describe("login form component", () => {
  let props: AuthType<Values>;
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
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      values: {
        login: "test",
        password: "test"
      },
      status: {
        loading: false,
        error: ""
      },
      errors: {
        login: "",
        password: ""
      },
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
            status={{loading: false, error: "Неправильный логин и/или пароль"}}
          />
        </Router>
      </MockedProvider>
    );

    expect(component.find(Typography).text()).toBe("Неправильный логин и/или пароль")
  });
});
