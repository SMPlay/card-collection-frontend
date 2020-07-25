import React from "react";
import { create } from "react-test-renderer";

import { ResetPasswordEmail, Values } from "./reset-password-email";
import { FormikType } from "../../../types/FormikType";

describe("ResetPasswordEmail compoennt", () => {
  let props: FormikType<Values>;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      values: {
        email: "test",
      },
      status: {
        loading: false,
        error: "",
      },
      errors: {
        email: "",
      }
    }
  });
  it("should render", () => {
    const tree = create(<ResetPasswordEmail {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
