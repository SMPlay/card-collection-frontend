import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "react-jss";

import { HeaderItem } from "./Header-item";
import { theme } from "../theme";

describe("Header item component", () => {
  it("should render component", () => {
    const tree = renderer.create(
     <ThemeProvider theme={theme}>
        <HeaderItem></HeaderItem>
     </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
