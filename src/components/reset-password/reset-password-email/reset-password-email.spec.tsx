import React from "react";
import { create } from "react-test-renderer";

import { ResetPasswordEmail } from "./reset-password-email";

describe("ResetPasswordEmail compoennt", () => {
  it("should render", () => {
    const tree = create(<ResetPasswordEmail/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
