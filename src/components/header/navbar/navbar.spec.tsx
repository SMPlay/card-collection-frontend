import React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./navbar";

describe("Navbar", () => {
  it("should render", () => {
    const props = {
      handleDrawerClose: jest.fn(),
      drawerWidth: 200,
      isOpen: false,
      pages: [{ pageName: "test", url: "/" }],
      collectionsName: [{ id: "test", name: "test" }],
      collectionsNameError: false,
    }

    const tree = create(
      <Router>
        <Navbar {...props}/>
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
