import React from "react";
import { create } from "react-test-renderer";

import { HeaderContent } from "./header-content";

describe("header content", () => {
  it("should render", () => {
    const props = {
      isOpen: true,
      currentPage: "test",
      handleDrawerOpen: jest.fn(),
    };

    const tree = create(<HeaderContent {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
