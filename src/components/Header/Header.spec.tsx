import React from "react";
import renderer from "react-test-renderer";

import { Header } from "./Header";

describe("Header component", () => {
  it("should render component", () => {
    const tree = renderer.create(
      <Header></Header>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
