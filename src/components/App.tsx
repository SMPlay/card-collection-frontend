import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, CollectionsPage } from "../pages";
import { Header } from "./Header/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collections/:id" component={CollectionsPage}/>
      </Switch>
    </Router>
  );
};

export default App;
