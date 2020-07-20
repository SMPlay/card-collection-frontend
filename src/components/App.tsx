import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, CollectionPage, LoginPage, RegistrationPage } from "../pages";
import { Header } from "./header/header";

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collections/:id" component={CollectionPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/registration" component={RegistrationPage}/>
      </Switch>
    </Router>
  );
};

export default App;
