import React from "react";
import { create } from "react-test-renderer";

import { CollectionDescription, CollectionDescriptionProps } from "./collection-description";

describe("CollectionDescription component", () => {
  it("should render", () => {
    const props: CollectionDescriptionProps = {
      description: {
        name: "test",
        imageUrl: "test",
        id: "test",
        cardsCount: 0,
        release: 0,
      }
    };

    const tree = create(<CollectionDescription {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
