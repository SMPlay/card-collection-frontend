import React from "react";
import { create } from "react-test-renderer";

import { RegistrationForm, Values } from "./registration-form";
import { AuthType } from "../../types/AuthType";

describe("Registration from component", () => {
  let props: AuthType<Values>;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      values: {
        login: "test",
        password: "test",
        confirmPassword: "test"
      },
      status: "",
      errors: {
        login: "",
        password: "",
        confirmPassword: "test"
      },
      touched: {
        login: false,
        password: false,
        confirmPassword: false
      }
    }
  });

  it("should render", () => {
    const tree = create(
      <RegistrationForm {...props}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
