import React from "react";
import { create } from "react-test-renderer";

import { NewPasswordForm, Values } from "./new-password-form";
import { FormikType } from "../../../types/FormikType";

describe("NewPasswordForm component", () => {
  let props: FormikType<Values>;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      values: {
        newPassword: "test",
        confirmNewPassword: "test"
      },
      status: {
        loading: false,
        error: "",
      },
      errors: {
        newPassword: "",
        confirmNewPassword: ""
      }
    }
  });

  it("should render", () => {
    const tree = create(<NewPasswordForm {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
