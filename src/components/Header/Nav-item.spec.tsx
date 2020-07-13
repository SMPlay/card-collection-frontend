import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "react-jss";

import { NavItem } from "./Nav-item";
import { theme } from "../../theme";

describe("Header item component", () => {
  it("should render component", () => {
    const tree = renderer.create(
     <ThemeProvider theme={theme}>
        <NavItem>Коллекции</NavItem>
     </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
