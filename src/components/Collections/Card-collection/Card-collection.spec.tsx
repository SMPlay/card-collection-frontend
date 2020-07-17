import React from "react";
import { create } from "react-test-renderer";

import { CardCollection } from "./card-collection";

describe("CardCollection component", () => {
  it("should render", () => {
    const props = {
      name: "test",
      imageUrl: "test",
      cardsCount: 1,
      release: 1
    }

    const tree = create(<CardCollection {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
