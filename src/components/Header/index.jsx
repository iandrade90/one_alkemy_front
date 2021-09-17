/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        {/* //? Una vez que este implementado el Router se debera cambiar TODAS las etiquetas 'a' por Link */}
        <a to='/'>
          <img src={publicInfo && publicInfo.logo} className='logo' alt='' />
        </a>
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
            <li className='nav-item rounded ps-2 ps-lg-0 mb-1 me-lg-4 mb-lg-0 header-link active'>
              <a className='nav-link'>Inicio</a>
            </li>
            {publicInfo &&
              publicInfo.links.map(link => (
                <li className='nav-item rounded-3 ps-2 ps-lg-0 mb-1 mb-lg-0 me-lg-3 '>
                  <a className='nav-link'>{link.name}</a>
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
                <a className='button secondary-btn flex-grow-1'>Registrarse</a>
                <a className='button primary-btn flex-grow-1'>Iniciar Sesión</a>
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
                      <a
                        className='dropdown-item d-flex align-items-center h-100'
                        href='/backoffice/profile'>
                        <HiUser className='me-2 h-100 text-secondary' />
                        Mi perfil
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <HiCog className='me-2 h-100 text-secondary' />
                        Configuraciones
                      </a>
                    </li>
                    {isAdmin && (
                      <li>
                        <a className='dropdown-item' href='/backoffice'>
                          <HiClipboardList className='me-2 h-100 text-secondary' />
                          Ir a Backoffice
                        </a>
                      </li>
                    )}

                    <li>
                      <a className='dropdown-item' href='#'>
                        <HiOutlineLogout className='me-2 h-100 text-secondary' />
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='d-flex d-lg-none align-items-center justify-content-between flex-grow-1'>
                  <div className='d-flex align-items-center user '>
                    <button className='d-block user-image overflow-hidden rounded-circle border '>
                      <img src='https://i.pravatar.cc/250?img=3' alt='' />
                    </button>
                    <div className='d-lg-none d-flex flex-column ms-2 user-details justify-content-center'>
                      <a className='user-name' href='/backoffice/profile'>
                        Octavio Peralta
                      </a>
                      <span className='user-email'>
                        octaviojperalta99@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className='mobile-buttons'>
                    {isAdmin && (
                      <a href='/backoffice/'>
                        <HiClipboardList className=' icon me-2 h-100 text-secondary' />
                      </a>
                    )}
                    <a href='/'>
                      <HiCog className=' icon me-2 h-100 text-secondary' />
                    </a>
                    <a href='/'>
                      <HiOutlineLogout className=' icon me-2 h-100 text-secondary' />
                    </a>
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
