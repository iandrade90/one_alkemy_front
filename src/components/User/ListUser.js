import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const initialList = [
    {
        id: 1,
        firstName: "leandro",
        lastName: "suarez",
        email: "leandro@gmail.com",
    },
    {
        id: 2,
        firstName: "matias",
        lastName: "Gonzalez",
        email: "leandro@gmail.com",
    },
    {
        id: 3,
        firstName: "carlos",
        lastName: "gonzalez",
        email: "leandro@gmail.com",
    },
    {
        id: 4,
        firstName: "leandro",
        lastName: "suarez",
        email: "leandro@gmail.com",
    },
    {
        id: 5,
        firstName: "leandro",
        lastName: "suarez",
        email: "leandro@gmail.com",
    },
    {
        id: 6,
        firstName: "leandro",
        lastName: "suarez",
        email: "leandro@gmail.com",
    },
    {
        id: 7,
        firstName: "test",
        lastName: "test",
        email: "test@gmail.com",
    },
];

const ListUser = () => {
    const [listUser, setListUser] = useState(initialList);
    const [userSelected, setUserSelected] = useState({
        id: '',
        firstName: "",
        lastName: "",
        email: "",
    })

    const selectUser = (item) => {
        console.log("seleccionado", item)
        setUserSelected(item)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUserSelected((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const editUser = (userSelected) => {
        const dataEdited = listUser.map(user => {
            if (user.id === userSelected.id) {
                return {
                    id: userSelected.id,
                    firstName: userSelected.firstName,
                    lastName: userSelected.lastName,
                    email: userSelected.email,
                };
            }

            return user;
        });
        setListUser(dataEdited);
    }

    const deleteUser = () => {
        const newListUser = (listUser.filter(user => user.id !== userSelected.id));
        setListUser(newListUser)
    }

    return (
        <div className='container'>

            <div className="modal fade" id="ModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="first-name" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="first-name" name="firstName" value={userSelected && userSelected.firstName} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last-name" className="col-form-label">Apellido:</label>
                                    <input type="text" className="form-control" id="last-name" name="lastName" value={userSelected && userSelected.lastName} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Email:</label>
                                    <input className="form-control" id="message-text" readOnly name="email" value={userSelected && userSelected.email} onChange={handleChange}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() => editUser(userSelected)}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="ModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Estas seguro de eliminar?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onClick={() => deleteUser()}>Si</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellido</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.length > 0 ? (
                            listUser.map(user => (
                                <tr key={user.id} className='align-middle'>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button type='button' className='btn btn-secondary btn-sm p-1 m-1' data-bs-toggle="modal" data-bs-target="#ModalEdit"
                                            onClick={() => selectUser(user)}
                                        >
                                            <AiOutlineEdit />
                                        </button>
                                        <button type='button' className='btn btn-danger btn-sm p-1 m-1' data-bs-toggle="modal" data-bs-target="#ModalDelete" onClick={() => selectUser(user)}>
                                            <AiOutlineDelete />
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
            </div>
        </div>

    );
};

export default ListUser;
