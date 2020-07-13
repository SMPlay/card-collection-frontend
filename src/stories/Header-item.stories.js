import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { HeaderItem } from "../components/Header";
import { theme } from "../theme";

import "./index.css";

storiesOf("Header item", module)
  .add("Default", () => <ThemeProvider theme={theme}><HeaderItem>Коллекции</HeaderItem></ThemeProvider>);
