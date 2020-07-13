import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "../components";

import "./index.css";

storiesOf("Header", module).add("Default", () => {
  return (
    <Router>
        <Header />
    </Router>
  );
});
