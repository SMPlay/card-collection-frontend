import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { NavItem } from "../components";
import { theme } from "../theme";

import "./index.css";

storiesOf("Navbar item", module)
  .add("Default", () => <ThemeProvider theme={theme}><NavItem>Коллекции</NavItem></ThemeProvider>);
