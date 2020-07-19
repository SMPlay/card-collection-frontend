import React from "react";
import { create } from "react-test-renderer";
import { CollectionCard } from './collection-card';
import { SpiderManCard } from "../../../types/spider-man-card";
describe("CardCollection component", () => {
  it("should render", () => {
    const props: SpiderManCard = {
      name: "test",
      imageUrl: "test",
      type:"test",
      kind: "test",
      id: "test",
      need: 0,
      number: 1,
      have: 0,
    }

    const tree = create(<CollectionCard  {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
