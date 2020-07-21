import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
import { HeaderContent } from "./header-content";


describe("header content", () => {
  it("should render", () => {
    const props = {
      isOpen: true,
      currentPage: "test",
      handleDrawerOpen: jest.fn(),
    };

    const tree = create(
      <Router>
        <HeaderContent {...props}/>
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
