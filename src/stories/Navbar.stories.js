import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "react-jss";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "../theme";
import { Navbar } from "../components";

storiesOf("Navbar", module).add("Default", () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </Router>
  );
});
