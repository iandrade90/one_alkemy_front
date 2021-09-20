import React, { useState } from "react";
import "./style.css";
import Sidebar from "./Sidebar";

import { GoGrabber } from "../../icons";

const BackofficeNavigation = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  //? En un futuro el usuario estara almacenado en un estado global y va a poder ser consultado en cualquier componente
  const [user, setUser] = useState({
    userName: "Octavio Peralta",
    userImage: "https://i.pravatar.cc/100?img=12",
    isAdmin: true,
  });

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div
      className='position-relative d-flex vh-100'
      style={{ backgroundColor: "var(--color-gray-200)" }}>
      {/* sidebar */}
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} user={user} />
      <button
        className={`sidebar-overlay ${isOpen ? "d-block" : "d-none"}`}
        onClick={closeSidebar}></button>
      {/* CONTENT */}
      <div className='flex-grow-1 d-flex flex-column'>
        {/* HEADER */}
        <div
          id='header'
          className=' d-md-none d-flex justify-content-between shadow-sm'>
          <button onClick={openSidebar}>
            <GoGrabber />
          </button>
          <div className='px-3'>
            <img src={user.userImage} className='user-avatar' alt='' />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className='flex-grow-1 main-content overflow-auto d-flex flex-column position-relative'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackofficeNavigation