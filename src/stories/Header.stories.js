import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { theme } from "../theme";
import { Header } from "../components/Header";

storiesOf("header", module)
  .add("Default", () => <ThemeProvider theme={theme}><Header/></ThemeProvider>)
