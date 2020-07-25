import React from "react";
import { create } from "react-test-renderer";

import { RegistrationForm, Values } from "./registration-form";
import { FormikType } from "../../types/FormikType";

describe("Registration from component", () => {
  let props: FormikType<Values>;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      values: {
        login: "test",
        password: "test",
        confirmPassword: "test"
      },
      status: {
        loading: false,
        error: "",
      },
      errors: {
        login: "",
        password: "",
        confirmPassword: "test"
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
