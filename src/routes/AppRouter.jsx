import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { RegisterForm , LoginForm } from "../components";

import { BackOffice, ContactPage } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/backoffice" component={BackOffice} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
