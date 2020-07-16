import React from "react";
import { create } from "react-test-renderer";

import { DrawerHeader } from "./Drawer-header";

describe("Drawer-header component", () => {
  it("should render", () => {
    const props = {
      handleDrawerClose: jest.fn();
      drawerWidth: 240,
      open: true,
      pages: [{ pageName: "test", url: "/" }]
    }

    const tree = create(<DrawerHeader {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  })
})
