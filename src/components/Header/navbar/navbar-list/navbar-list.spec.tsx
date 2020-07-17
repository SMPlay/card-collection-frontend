import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import { NavbarList, NavbarListProps } from "./navbar-list";

describe("Navbar list component", () => {
  let props: NavbarListProps;

  beforeEach(() => {
    props = {
      pages: [
        { pageName: "Test", url: "/test"}
      ],
      collectionsName: [
        { id: "test", name: "test" }
      ],
      collectionsNameError: false
    };
  });

  it("should render", () => {
    const tree = renderer.create(
      <Router>
        <NavbarList {...props}/>
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});