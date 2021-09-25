/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { HiUser, HiCog, HiClipboardList, HiOutlineLogout } from "../../icons";
const LINKS = [
  {
    name: "Testimonios",
    route: "/testimonios",
  },
  {
    name: "Nosotros",
    route: "/nosotros",
  },
  {
    name: "Servicios",
    route: "/servicios",
  },
  {
    name: "Donaciones",
    route: "/donaciones",
  },
  {
    name: "Contenido",
    route: "/contenido",
  },
];

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicInfo, setPublicInfo] = useState(null);

  //? Cuando este implementado Redux se debera hacer consultar por la existencia de un usuario
  const [user, setUser] = useState(true);

  useEffect(() => {
    //?  Una vez que el endpoint este creado, se debe implementar una peticion a la api para obtener los datos de manera dinamica
    const info = { logo: "./assets/logo-sm.png", links: LINKS };
    setPublicInfo(info);
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
      <div className='container-fluid flex align-items-center py-1'>
        <Link to='/'>
          <img src={publicInfo && publicInfo.logo} className='logo' alt='' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse ms-lg-4 mt-2 mt-lg-0  '
          id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto text-md ms-2 mb-2 mb-lg-0'>
            <li className='nav-item rounded ps-2 ps-lg-0 mb-1 me-lg-4 mb-lg-0 header-link'>
              <NavLink to='/' className='nav-link' activeClassName="nav-link-selected">
                Inicio
              </NavLink>
            </li>
            {publicInfo &&
              publicInfo.links.map(link => (
                <li className='nav-item rounded-3 ps-2 ps-lg-0 mb-1 mb-lg-0 me-lg-3'>
                  <NavLink to={link.route} className='nav-link' activeClassName="nav-link-selected">
                    {link.name}
                  </NavLink>
                </li>
              ))}

            <hr
              className='d-lg-none dropdown-divider'
              style={{ marginLeft: "-1.25rem", marginRight: "-0.725rem" }}
            />
          </ul>
          <div>
            {!user ? (
              <div className='d-flex align-items-center gap-2'>
                <Link to='/register' className='button secondary-btn flex-grow-1'>
                  Registrarse
                </Link>
                <Link to='/login' className='button primary-btn flex-grow-1'>
                  Iniciar Sesión
                </Link>
              </div>
            ) : (
              <div className=' d-flex align-items-center justify-content-between profile-menu'>
                <div className='dropdown d-none d-lg-flex align-items-center'>
                  <a
                    className='user-image overflow-hidden rounded-circle border  '
                    href='#'
                    role='button'
                    id='dropdownMenuLink'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    <img src='https://i.pravatar.cc/250?img=3' alt='' />
                  </a>

                  <ul
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='dropdownMenuLink'>
                    <li>
                      <Link
                        className='dropdown-item d-flex align-items-center h-100'
                        to='/backoffice/profile'>
                        <HiUser className='me-2 h-100 text-secondary' />
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/'>
                        <HiCog className='me-2 h-100 text-secondary' />
                        Configuraciones
                      </Link>
                    </li>
                    {isAdmin && (
                      <li>
                        <Link className='dropdown-item' to='/backoffice'>
                          <HiClipboardList className='me-2 h-100 text-secondary' />
                          Ir a Backoffice
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link className='dropdown-item' hrefto='/login'>
                        <HiOutlineLogout className='me-2 h-100 text-secondary' />
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='d-flex d-lg-none align-items-center justify-content-between flex-grow-1'>
                  <div className='d-flex align-items-center user '>
                    <button className='d-block user-image overflow-hidden rounded-circle border '>
                      <img src='https://i.pravatar.cc/250?img=3' alt='' />
                    </button>
                    <div className='d-lg-none d-flex flex-column ms-2 user-details justify-content-center'>
                      <Link className='user-name' to='/backoffice/profile'>
                        Octavio Peralta
                      </Link>
                      <span className='user-email'>
                        octaviojperalta99@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className='mobile-buttons'>
                    {isAdmin && (
                      <Link to='/backoffice/'>
                        <HiClipboardList className=' icon me-2 h-100 text-secondary' />
                      </Link>
                    )}
                    <a href='/'>
                      <HiCog className=' icon me-2 h-100 text-secondary' />
                    </a>
                    <Link href='/login'>
                      <HiOutlineLogout className=' icon me-2 h-100 text-secondary' />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
