import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  BackofficeNavigation,
  Testimonials,
  ContactList,
  ListUser,
  DetailsCard,
} from "../../components";
import { Activities } from "../../components/Activities";
import { Profile } from "../index";
import NewsBackoffice from "../../components/NewsBackoffice";

const BackOffice = () => {
  return (
    <BackofficeNavigation>
      <Switch>
        <Route exact path="/backoffice/news">
          <div className="section-title">
            <h2>Novedades</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <NewsBackoffice />
          </div>
        </Route>
        <Route path="/backoffice/news/:id">
          <div className="section-title">
            <h2>Novedades</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <DetailsCard />
          </div>
        </Route>
        <Route exact path="/backoffice/activities">
          <div className="section-title">
            <h2>Actividades</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <Activities />
          </div>
        </Route>
        <Route path="/backoffice/testimonios">
          <div className="section-title">
            <h2 className="text-end">Testimonios</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <Testimonials />
          </div>
        </Route>
        <Route path="/backoffice/users">
          <div className="section-title">
            <h2>Usuarios</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <ListUser />
          </div>
        </Route>
        <Route path="/backoffice/profile">
          <div className="section-title">
            <h2>Perfil de Iván</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <Profile />
          </div>
        </Route>
        <Route path="/backoffice/contacts">
          <div className="section-title">
            <h2>Contactos</h2>
          </div>
          <div className="section-content flex-grow-1 vh-100 overflow-auto">
            <ContactList />
          </div>
        </Route>
      </Switch>
    </BackofficeNavigation>
  );
};
export default BackOffice;

//! SUGERENCIA de como deberia implementarse la navegacion del backoffice
/*const SectioRouter = ({
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
};*/
