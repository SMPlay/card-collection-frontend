import React from "react";
import { create } from "react-test-renderer";

import { CardsPagination, CardsPaginationProps } from "./cards-pagination";

describe("CardsPagination component", () => {
  it("should render", () => {
    const props: CardsPaginationProps = {
      count: 0,
      onChange: jest.fn(),
    };

    const tree = create(<CardsPagination {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
