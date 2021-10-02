import axios from 'axios';
import React, {useEffect,useState} from 'react';

const ContactList = () => {
    const [data, setData] = useState([]);
    const endpoint = "http://localhost:3001/api/v1/contacts";
    const getData = async (endpoint) => {
        return await axios.get(endpoint);
    }
    useEffect(() => {
        const result = getData(endpoint);
        setData(result.data);
    }, [])
    const example = [{
        name: 'Test',
        phone: '12345678',
        email: 'email@email.com',
        message: 'test'
    }]
    return (
        <div className="container">
            <div className="card shadow-sm m-3 p-2">
                <table className="table table-hover my-3 text-center">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {example.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContactList;