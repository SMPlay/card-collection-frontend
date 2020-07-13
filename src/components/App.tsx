import React from "react";
import { ThemeProvider } from "react-jss";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import { HomePage } from "../pages";
import { Header } from "./Header";

import { theme } from "../theme";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
