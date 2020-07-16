import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";

import { DrawerHeader } from "./Drawer-header";

describe("Drawer-header component", () => {
  it("should render", () => {
    const props = {
      handleDrawerClose: jest.fn(),
      drawerWidth: 240,
      open: true,
      pages: [{ pageName: "test", url: "/" }]
    }

    const tree = create(
      <Router>
        <DrawerHeader {...props} />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})
