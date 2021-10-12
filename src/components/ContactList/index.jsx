// import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { BsTrash } from "../../icons/index";
import { AnimatePresence } from "framer-motion";
import {
    deleteService,
    getAllService,
} from "../../services";
import Modal from "./Modal";


const ContactList = () => {
    const [contactList, setContactList] = useState([]);
    const [newContactData, setNewContactData] = useState({});
    const [modal, setModal] = useState(false);

    const close = () => {
        setNewContactData({});
        setModal(false);
    };
    
    const open = (data) => {
        setNewContactData(data);
        setModal(true);
    };

    useEffect(() => {
        getAllService("contacts")
        .then((res) => {
            setContactList(res.data);
        })
        .catch((error)=>{
          console.log(error)
        })
      }, []);

    const handleSubmit = async (payload) => {
        let contactList;
        await deleteService(`contacts/${payload.data.id}`);
        const newContactList = contactList.filter((contact) => contact.id !== payload.data.id);
        setContactList(newContactList);
        close();
    };

    return (
        <div className="container">
            <div className="card table-responsive table-striped m-3 p-2">
                {
                    contactList.message ? (<h5>{contactList.message}</h5>)
                    :
                    <table className="table table-hover my-3 ">
                    <thead>
                        <tr className='align-middle'>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList.length>0 && contactList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                                {console.log(item)}
                                <td>
                                    <button
                                    className="btn btn-lg btn-danger"
                                    onClick={() => open({ item, delete: true })}
                                    >
                                        <BsTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    } 
                    </tbody>
                </table>
                }
            </div>
            <AnimatePresence inital={false} exitBeforeEnter={true}>
                {modal && (
                <Modal
                    modal={modal}
                    data={newContactData}
                    handleClose={close}
                    onSubmit={handleSubmit}
                />
                )}
            </AnimatePresence>
        </div>
    )
}

export default ContactList;