import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import {
  ImTree,
  FiUsers,
  GoX,
  BiMessageSquareDetail,
  BsNewspaper,
  TiThListOutline,
  IoMdPeople,
  VscChecklist,
  ImImages,
  GoSignOut,
} from "../../icons";

const adminList = [
  { title: "Novedades", icon: BsNewspaper, path: "/backoffice/news" },
  { title: "Actvidades", icon: VscChecklist, path: "/backoffice/activities" },
  { title: "Categorias", icon: TiThListOutline, path: "/backoffice/categories" },
  { title: "Testimonios", icon: BiMessageSquareDetail, path: "/backoffice/testimonios" },
  { title: "Organizacion", icon: ImTree, path: "/backoffice/organizacion" },
  { title: "Slides", icon: ImImages, path: "/backoffice/slides" },
  { title: "Usuarios", icon: FiUsers, path: "/backoffice/usuarios" },
  { title: "Miembros", icon: IoMdPeople, path: "/backoffice/miembros" },
  { title: "Mi perfil", icon: IoMdPeople, path: "/backoffice/perfil" },
];
const standardList = [{ title: "Mi perfil", icon: IoMdPeople, path: "/perfil" }];

const Sidebar = ({ user, isOpen, closeSidebar }) => {
  const items = user.isAdmin ? adminList : standardList;


  return (
    <div
      id='sidebar'
      className={`bottom-0 top-0 flex-shrink-0 d-flex ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } shadow-lg`}>
      <div className='sidebar-content d-flex flex-column justify-content-between'>
        <div className='flex flex-column'>
          <button className='close-button d-md-none' onClick={closeSidebar}>
            <GoX className='icon' />
          </button>
          {/* LOGO */}
          <div className='logo d-flex justify-content-center'>
            <img src='./assets/logo.png' alt='' />
          </div>

          {/* LINKS */}
          <div className='links'>
            {items.map(({ icon: Icon, title, path }, index) => (
              <Link to={path} key={index}>
                <Icon className='icon' />
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className='profile-section justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img src={user.userImage} alt='' />
            <div className='d-flex flex-column'>
              <span className='username'>{user.userName}</span>
              <p className='user-role'>
                User role: <span>{user.isAdmin ? "ADMIN" : "STANDARD"}</span>
              </p>
            </div>
          </div>
          <Link to='/'>
            <GoSignOut className='icon' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
