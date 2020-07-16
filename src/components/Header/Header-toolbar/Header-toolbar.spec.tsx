import React from "react";
import { create } from "react-test-renderer";

import { HeaderToolbar } from "./Header-toolbar";

describe("Header-toolbar component", () => {
  it("should render", () => {
    const props = {
      handleDrawerOpen: jest.fn(),
      currentPage: "test",
      open: true
    }

    const tree = create(<HeaderToolbar {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
