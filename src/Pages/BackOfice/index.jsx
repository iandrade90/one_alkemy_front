import React from "react";
import { Switch, Route } from "react-router-dom";
import { BackofficeNavigation, Testimonials } from "../../components";
import { Activities } from "../../components/Activities";
import {ListUser} from "../../components";
import { Profile } from "../index";

const BackOffice = () => {
  return (
    <BackofficeNavigation>
      <Switch>
        <Route path='/backoffice/activities'>
          <div className='section-title'>
            <h2>Actividades</h2>
          </div>
          <div className='section-content flex-grow-1 vh-100 overflow-auto'>
            <Activities />
          </div>
        </Route>
        <Route path='/backoffice/testimonios'>
          <div className='section-title'>
            <h2 className='text-end'>Testimonios</h2>
          </div>
          <div className='section-content flex-grow-1 vh-100 overflow-auto'>
            <Testimonials />
        <Route path='/backoffice/users'>
          <div className='section-title'>
            <h2>Usuarios</h2>
          </div>
          <div className='section-content flex-grow-1 vh-100 overflow-auto'>
            <ListUser />
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
const SectioRouter = ({
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
