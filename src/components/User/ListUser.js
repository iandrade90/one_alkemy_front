import React, { useState, useEffect } from "react";
import { deleteService, getAllService, updateService } from "../../services";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import Modal from "./UserModal";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const close = () => {
    setUserData({});
    setModalOpen(false);
  };
  const open = user => {
    setUserData(user);
    setModalOpen(true);
  };
  const handleSubmit = async payload => {
    let newUserList;

    if (payload.type === "delete") {
      await deleteService(`users/${payload.data.id}`);

      newUserList = listUser.filter(user => user.id !== payload.data.id);

      setListUser(newUserList);
    } else {
      newUserList = listUser;

      //   //? Caso contrario, edita la actividad en funcion del id que me llega
      await updateService(`users/${payload.id}`, payload);

      newUserList = listUser.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            id: user.id,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            roleId: payload.roleId,
          };
        }

        return user;
      });
    }
    setListUser(newUserList);
    close();
  };

  useEffect(() => {
    getAllService("users").then(res => setListUser(res.data));
  }, []);

  return (
    <div className=''>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Apellido</th>
              <th scope='col'>Email</th>
              <th scope='col'>Rol</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listUser.length > 0 ? (
              listUser.map(user => (
                <tr key={user.id} className='align-middle'>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.roleId === 1 ? "ADMIN" : "STANDARD"}</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-sm btn-secondary me-2'
                      onClick={() => open(user)}>
                      {/* <AiOutlineEdit /> */}
                      Editar
                    </button>
                    <button
                      type='button'
                      className='btn btn-sm btn-danger me-2'
                      onClick={() => open({ user, delete: true })}>
                      Borrar
                      {/* <AiOutlineDelete /> */}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4'>Sin datos</td>
              </tr>
            )}
          </tbody>
        </table>
        <AnimatePresence inital={false} exitBeforeEnter={true}>
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              handleClose={close}
              data={userData}
              onSubmit={handleSubmit}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ListUser;
