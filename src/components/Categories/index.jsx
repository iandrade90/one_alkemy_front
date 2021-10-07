import React, { useEffect, useState } from 'react';
import categoriesData from './data';
import { BsPencil, BsTrash } from "../../icons/index";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return(
    <>
      <section className="border-bottom">
        <div className="table-responsive">
          <table className="caption-top table table-striped table-sm">
            <caption>
              <div className='d-flex justify-content-between'>
                <div>Lista de Categorias</div>
                <div>
                  <button className='btn btn btn-primary'>
                    Crear Categoría
                  </button>
                </div>
              </div>
            </caption>
              <thead>
                  <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                {categories
                  ? categories.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                          <button className="btn btn-lg btn-primary me-2"><BsPencil /></button>
                          <button className="btn btn-lg btn-danger"><BsTrash /></button>
                        </td>
                      </tr>
                  ))
                : null}
              </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Categories;