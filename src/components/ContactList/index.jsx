// import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { getAllService } from '../../services';

const ContactList = () => {
    const [data, setData] = useState([]);
    // const endpoint = "http://localhost:3001/api/v1/contacts";
    // const getData = async (endpoint) => {
    //     return await axios.get(endpoint);
    // }
    // useEffect(() => {
    //     const result = getData(endpoint);
    //     setData(result.data);
    // }, [])

    useEffect(() => {
        getAllService("contacts")
        .then((res) => {
            setData(res.data);
        })
        .catch((error)=>{
          console.log(error)
        })
      }, []);

    const example = [{
        name: 'Test',
        phone: '12345678',
        email: 'email@email.com',
        message: 'test'
    }]
    return (
        <div className="container">
            <div className="card table-responsive table-striped m-3 p-2">
                {
                    data.message ? (<h5>{data.message}</h5>)
                    :
                    <table className="table table-hover my-3 ">
                    <thead>
                        <tr className='align-middle'>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length>0 && data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                                <td>{item.message}</td>
                            </tr>
                        ))
                    
                    } 
                    </tbody>
                </table>
                }
                
            </div>
        </div>
    )
}

export default ContactList;