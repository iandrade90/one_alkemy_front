import React from "react";
import { Switch, Route } from "react-router-dom";
import { BackofficeNavigation } from "../../components";
import { Activities } from "../../components/Activities";
import { Profile } from "../index";
import {ActivityDetail} from "../../components";

const BackOffice = () => {
  return (
    <BackofficeNavigation>
      <Switch>
        <Route exact path='/backoffice/activities'>
          <div className='section-title'>
            <h2>Actividades</h2>
          </div>
          <div className='section-content flex-grow-1 vh-100 overflow-auto'>
            <Activities />
          </div>
        </Route>
        <Route path='/backoffice/activities/:id'>
          <div className='section-title'>
            <h2>Detalle de actividad</h2>
          </div>
          <div className='section-content flex-grow-1 vh-100 overflow-auto'>
            <ActivityDetail />
          </div>
        </Route>
        <Route path='/backoffice/profile'>
          <div className='section-title'>
            <h2>Perfil de Iván</h2>
          </div>
          <div className='section-content flex-grow-1 vh-100 overflow-auto'>
            <Profile />
          </div>
        </Route>
        
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
