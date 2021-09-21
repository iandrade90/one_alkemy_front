import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsDetail from "../components/NewsDetail";
import {Home} from "../Pages/index"

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register'/>
        <Route exact path='/login'/>
        <Route exact path='/backoffice'/>
        <Route exact path='/news/:id' component={NewsDetail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;