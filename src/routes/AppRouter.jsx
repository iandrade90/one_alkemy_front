import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { BackOffice } from "../pages";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/register'/>
        <Route exact path='/login'/>
        <Route exact path='/backoffice' component ={BackOffice}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;