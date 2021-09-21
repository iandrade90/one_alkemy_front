import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { News } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/register'/>
        <Route exact path='/login'/>
        <Route exact path='/backoffice' />
        <Route exact path='/novedades' component={News}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;