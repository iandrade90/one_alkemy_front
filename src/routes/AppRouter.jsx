import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/register'/>
        <Route exact path='/login'/>
        <Route exact path='/backoffice'/>
      </Switch>
    </Router>
  );
};

export default AppRouter;