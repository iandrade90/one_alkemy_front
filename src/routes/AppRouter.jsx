import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm } from "../components";
import LoginForm from "../components/LoginForm";

import { BackOffice } from "../pages";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/register' component={RegisterForm} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/backoffice' component ={BackOffice}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;