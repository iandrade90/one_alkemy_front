import React from 'react';
import {BsPencil, BsTrash} from "../../../icons/index";
require('./index.css')

const NewsBackoffice = () => {
    const news = [
        {
            name: 'Test',
            image: 'http://psicoterapeutas.eu/imagenes-psicoterapeutas-eu/tests-objetivos.png',
            createdAt: '13-09-2021'
        },
        {
            name: 'Test',
            image: 'http://psicoterapeutas.eu/imagenes-psicoterapeutas-eu/tests-objetivos.png',
            createdAt: '13-09-2021'
        },
        {
            name: 'Test',
            image: 'http://psicoterapeutas.eu/imagenes-psicoterapeutas-eu/tests-objetivos.png',
            createdAt: '13-09-2021'
        },
        {
            name: 'Test',
            image: 'http://psicoterapeutas.eu/imagenes-psicoterapeutas-eu/tests-objetivos.png',
            createdAt: '13-09-2021'
        }
    ]
    return(
        <div className="card shadow-sm m-3 p-2">
        <table class="table table-hover news-table my-3 text-center">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Imagen</th>
                <th scope="col">Fecha</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {news.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>
                            <div>
                                <img src={item.image} width="125" alt={item.name} />
                            </div>
                        </td>
                        <td>{item.createdAt}</td>
                        <td>
                            <button className="btn btn-primary me-1"><BsPencil /></button>
                            <button className="btn btn-danger"><BsTrash /></button>
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table>
        </div>
    )
}

export default NewsBackoffice;