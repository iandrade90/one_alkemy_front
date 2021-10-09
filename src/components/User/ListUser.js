import React, { useState, useEffect } from "react";
import { getAllService } from '../../services';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ListUser = () => {
    const [listUser, setListUser] = useState([]);

  useEffect(() => {
      getAllService("users").then((res) =>
        setListUser(res.data));
    }, []);

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
                                        <button type='button' className='btn btn-secondary btn-sm p-1 m-1'
                                        >
                                            <AiOutlineEdit />
                                        </button>
                                        <button type='button' className='btn btn-danger btn-sm p-1 m-1' >
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
