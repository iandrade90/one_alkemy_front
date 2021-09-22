import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [activityData, setActivityData] = useState({});

  const close = () => {
    setActivityData({});
    setModalOpen(false);
  };
  const open = activity => {
    setActivityData(activity);
    setModalOpen(true);
  };

  
  //! Posteriormene estas acciones seran acompañadas por sus respectivas peticiones a al API
  const handleSubmit = payload => {
    //? Veo el atributo 'type' para decidir que tipo de accion debo hacer con lo que me llega desde modal
    //todo EN CADA SITUACION SE DEBE REALIZAR LA PETICION AL ENDPOINT CORRESPONDIENTE
    let newActivitiesList;
    console.log(payload)

    if (payload.type === "delete") {
      newActivitiesList = activities.filter(
        activity => activity.id !== payload.data.id
      );
      setActivities(newActivitiesList);
    } else {
      //? Si el payload no llega con un id => la actividad no existe
      const activityExists = payload.id || false;

      if (!activityExists) {
        //? Creo una nueva actividad
        const activitiesID = activities.map(act => act.id);
        const maxID = Math.max(...activitiesID);

        newActivitiesList = activities.concat({
          id: maxID + 1,
          title: payload.title,
          description: payload.description,
        });
      } else {
        //? Caso contrario, edita la actividad en funcion del id que me llega
        newActivitiesList = activities.map(activity => {
          if (activity.id === payload.id) {
            return {
              id: activity.id,
              title: payload.title,
              description: payload.description,
            };
          }

          return activity;
        });
      }
    }
    setActivities(newActivitiesList);
    close();
  };

  //? OP: Una vez que este implementado en endpoint se utilizara para obtener la infomacion, mientras tanto se utiliza un arraty
  useEffect(() => {
    setActivities(activitiesData);
  }, []);

  return (
    <>
      <table
        className='table table-hover caption-top align-middle'
        style={{ fontFamily: "Open Sans" }}>
        <caption>
          <div className='d-flex justify-content-between'>
            <div>Lista de actividades</div>
            <div>
              <button className='btn btn btn-primary' onClick={() => open({})}>
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
                        onClick={() => open(act)}>
                        Editar
                      </button>
                      <button
                        className='btn btn-sm btn-danger'
                        onClick={() => open({ act, delete: true })}>
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <AnimatePresence inital={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            data={activityData}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </>
  );
};
