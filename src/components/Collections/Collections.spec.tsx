import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
import { mount } from "enzyme";

import { Collections, CollectionsProps } from "./collections";

describe("Collections component", () => {
  let props: CollectionsProps;
  let component;
  beforeEach(() => {
    props = {
      collections: [
        {
          id: "test",
          name: "test",
          imageUrl: "test",
          cardsCount: 1,
          release: 1,
        },
      ],
      loading: false,
      error: false,
    };
  });

  it("should render", () => {
    const tree = create(
      <Router>
        <Collections
          collections={props.collections}
          loading={props.loading}
          error={props.error}
        />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render with loading", () => {
    component = mount(
      <Router>
        <Collections
          collections={props.collections}
          loading={true}
          error={props.error}
        />
      </Router>
    );

    expect(component.exists("Loading")).toBeTruthy();
  });

  it("should render with error", () => {
    component = mount(
      <Router>
        <Collections
          collections={props.collections}
          loading={props.loading}
          error={true}
        />
      </Router>
    );

    expect(component.exists("ReceivedError")).toBeTruthy();
  })
});
