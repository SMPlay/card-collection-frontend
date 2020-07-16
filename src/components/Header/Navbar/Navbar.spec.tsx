import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./Navbar";

describe("Header component", () => {
  it("should render", () => {
    const pages = [
      { pageName: "Test", url: "/test"}
    ]

    const tree = renderer.create(
      <Router>
        <Navbar pages={pages}/>
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});