import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm , LoginForm } from "../components";
import { BackOffice, ContactPage ,Home} from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/backoffice" component={BackOffice} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
