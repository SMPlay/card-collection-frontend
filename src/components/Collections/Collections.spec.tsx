import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";

import { Collections } from "./Collections";

describe("Collections component", () => {
  it("should render", () => {
    const collections = [{
      id: "test",
      name: "test",
      imageUrl: "test",
      cardsCount: 1,
      release: 1
    }];
    const tree = create(
      <Router>
        <Collections collections={collections}/>
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})
