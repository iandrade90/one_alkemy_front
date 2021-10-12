// import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { getAllService } from '../../services';
import { LoaderSpinner } from '../index'

const ContactList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getAllService("contacts")
        .then((res) => {
            setData(res.data);
            setLoading(false)
        })
        .catch((error)=>{
          console.log(error)
          setLoading(false)
        })
      }, []);


    return (
        <>
      {loading ? <LoaderSpinner /> :
        <>
        <div className="container">
            <div className="card table-responsive m-3 p-2">
                {
                    data.message ? (<h5>{data.message}</h5>)
                    :
                    <table className="table table-hover table-striped my-3 ">
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
                            </tr>
                        ))
                    
                    } 
                    </tbody>
                </table>
                }
                
            </div>
        </div>
        </>
      }
    </>
    )
}

export default ContactList;