import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

import { Header } from "./header";
import { GET_COLLECTIONS_NAME } from "../../queries";

describe("Header component", () => {
  const mocks = [
    {
      request: {
        query: GET_COLLECTIONS_NAME,
      },
      result: {
        data: {
          cardCollections: [{ id: "test", name: "test" }],
        },
      },
    },
  ];

  it("should render", () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router>
            <Header />
          </Router>
        </MockedProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
