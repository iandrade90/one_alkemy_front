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
        lastName: "suarez",
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
        firstName: "leandro",
        lastName: "suarez",
        email: "leandro@gmail.com",
    },
];

const ListUser = () => {
    const [listUser, setListUser] = useState(initialList);
    return (
        <div className='container'>

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
                                        <button type='button' className='btn btn-primary btn-sm p-1 m-1'>
                                            <AiOutlineEdit />
                                        </button>
                                        <button type='button' className='btn btn-primary btn-sm p-1 m-1'>
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
