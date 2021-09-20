import React from "react";
import { Switch, Route } from "react-router-dom";

import { BackofficeNavigation } from "../../components";

const BackOffice = () => {
  return (
    <BackofficeNavigation>
      <Switch>
        <SectionRouter
            path='/backoffice/activities'
            title='Actividades'
            component={<h1>ahacomponentrs</h1>}/>  
      </Switch>
    </BackofficeNavigation>
  );
};

export default BackOffice;

//! SUGERENCIA de como deberia implementarse la navegacion del backoffice
const SectionRouter = ({
  component: Component,
  title,
  children,
  to,
  ...rest
}) => {
  return (
    <Route {...rest} exact path={to} component={Component} title={title}>
      <div>
        <h2 className='section-title'>{title}</h2>
      </div>
      <div className='section-content  flex-grow-1 overflow-auto'>
        {Component ? <Component /> : children}
      </div>
    </Route>
  );
};
