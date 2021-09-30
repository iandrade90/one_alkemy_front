import React from 'react';

const NewsBackoffice = () => {
    return(
        <>
            <section className="border-bottom">
                <div className="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Título</th>
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
                                            <img src={item.image} width="125" height="auto" alt={item.name} />
                                        </div>
                                    </td>
                                    <td>{item.createdAt}</td>
                                    <td>
                                        <Modal modalconfig={deleteModal(item)} />
                                        <Modal modalconfig={modifyModal(item)} />
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default NewsBackoffice;