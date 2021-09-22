import React, { useEffect, useState } from "react";

const activitiesData = [
  {
    id: 1,
    title: "Prueba 1",
    description: "<p>Prueba <strong>1</strong></p>",
  },
  {
    id: 2,
    title: "Prueba 2",
    description: "<p>Prueba <strong>2</strong></p>",
  },
  {
    id: 3,
    title: "Prueba 3",
    description: "<p>Prueba <strong>3</strong></p>",
  },
];

export const Activities = () => {
  const [activities, setActivities] = useState();
  


  //? OP: Una vez que este implementado en endpoint se utilizara para obtener la infomacion, mientras tanto se utiliza un arraty
  useEffect(() => {
    setActivities(activitiesData);
  }, []);

  return (
   

      <table className='table table-hover caption-top align-middle'>
        <caption>
          <div className='d-flex justify-content-between'>
            <div>Lista de actividades</div>
            <div>
              <button
                className='btn btn btn-primary'
                onClick={() => {}}>
                Crear actividad
              </button>
            </div>
          </div>
        </caption>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nombre de Actividad</th>
            <th scope='col'></th>
            <th scope='col' className='text-center'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {activities
            ? activities.map(act => (
                <tr key={act.id}>
                  <th scope='row'>{act.id}</th>
                  <td colSpan='2'>{act.title}</td>
                  <td>
                    <div className='d-flex justify-content-center align-items-center'>
                      <button
                        className='btn btn-sm btn-secondary me-2'
                        onClick={() => {}}>
                        Editar
                      </button>
                      <button
                        className='btn btn-sm btn-danger'
                        onClick={() => {}}>
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
  );
};
