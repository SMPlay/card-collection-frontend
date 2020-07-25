import React from "react";
import { create } from "react-test-renderer";

import { CollectionCard } from "./collection-card";
import { CardType } from "../../../types/CardType";

describe("CollectionCard component", () => {
  it("should render", () => {
    const props: CardType = {
      id: "test",
      name: "test",
      imageUrl: "test",
      role: "test",
      rarity: "test",
      need: 0,
      have: 0,
      number: "test",
    };

    const tree = create(<CollectionCard {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
