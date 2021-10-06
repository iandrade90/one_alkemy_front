import React, { useEffect } from "react";
import { PrivateRouter } from "./PrivateRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm, LoginForm } from "../components";
import { BackOffice, ContactPage, Home, News } from "../Pages";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllService } from "../services";
import { fillUserData } from "../store/authSlice";

const AppRouter = () => {
  const { isLogged, user } = useSelector((state) => state.user_auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMe = async () => {
      const response = await getAllService("/auth/me");
      dispatch(fillUserData(response.data));
    };
    if (!user.firstName) {
      fetchMe();
    }
  }, [dispatch, user]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/backoffice" component={BackOffice} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
