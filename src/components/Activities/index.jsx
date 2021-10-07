import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";
import {
  deleteService,
  getAllService,
  postService,
  updateService,
} from "../../services";
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
  console.log(activities);

  const close = () => {
    setActivityData({});
    setModalOpen(false);
  };
  const open = activity => {
    setActivityData(activity);
    setModalOpen(true);
  };

  const handleSubmit = async payload => {
    let newActivitiesList;

    if (payload.type === "delete") {
      await deleteService(`activities/${payload.data.id}`);

      newActivitiesList = activities.filter(
        activity => activity.id !== payload.data.id
      );

      setActivities(newActivitiesList);
    } else {
      //? Si el payload no llega con un id => la actividad no existe
      const activityExists = payload.id || false;

      if (!activityExists) {
        //? Creo una nueva actividad
        const { data: activityCreated } = await postService("activities/", {
          name: payload.name,
          content: payload.content,
        });

        newActivitiesList = activities.concat({
          id: activityCreated.data.id,
          name: activityCreated.data.name,
          content: activityCreated.data.content,
        });
      } else {
        //? Caso contrario, edita la actividad en funcion del id que me llega
        await updateService(`activities/${payload.id}`, {
          name: payload.name,
          content: payload.content,
        });

        newActivitiesList = activities.map(activity => {
          if (activity.id === payload.id) {
            return {
              id: activity.id,
              name: payload.name,
              content: payload.content,
            };
          }

          return activity;
        });
      }
    }
    setActivities(newActivitiesList);
    close();
  };

  useEffect(() => {
    getAllService("activities").then(({ data }) => setActivities(data.data));
  }, []);

  return (
    <>
      <table
        className='table table-hover caption-top align-middle'
        style={{ fontFamily: "Poppins" }}>
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
                  <Route>
                    <td className='link-activity' colSpan='2'>
                      <Link to={`/backoffice/activities/${act.id}`}>
                        {act.name}
                      </Link>
                    </td>
                  </Route>
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
