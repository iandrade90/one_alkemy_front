import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import news from './data';
import { BsPencil, BsTrash } from "../../icons/index";
import { AnimatePresence } from "framer-motion";

const NewsBackoffice = () => {
  const [modal, setModal] = useState(false);
  const [newsData, setNewsData] = useState();
  const [newsActData, setNewsActData] = useState({});

  const close = () => {
    setNewsActData({});
    setModal(false);
  };

  const open = data => {
    setNewsActData(data);
    setModal(true);
  };

  useEffect(() => {
    setNewsData(news);
  }, [])


  const handleSubmit = payload => {
    //? Veo el atributo 'type' para decidir que tipo de accion debo hacer con lo que me llega desde modal
    //todo EN CADA SITUACION SE DEBE REALIZAR LA PETICION AL ENDPOINT CORRESPONDIENTE
    let newNewsList;
    console.log(payload)

    if (payload.type === "delete") {
      newNewsList = newsData.filter(
        news => news.id !== payload.data.id
      );
      setNewsData(newNewsList);
    } else {
      //? Si el payload no llega con un id => la actividad no existe
      const newsExists = payload.id || false;

      if (!newsExists) {
        //? Creo una nueva actividad
        const newsID = newsData.map(news => news.id);
        const maxID = Math.max(...newsID);

        newNewsList = newsData.concat({
          id: maxID + 1,
          title: payload.title,
          image: payload.image,
          content: payload.content,
          category: payload.category
        });
      } else {
        //? Caso contrario, edita la actividad en funcion del id que me llega
        newNewsList = newsData.map(news => {
          if (news.id === payload.id) {
            return {
              id: payload.id,
              title: payload.title,
              image: payload.image,
              content: payload.content,
              category: payload.category,
            };
          }

          return news;
        });
      }
    }
    setNewsData(newNewsList);
    close();
  };

    return(
        <>
            <section className="border-bottom">
                <div className="table-responsive">
                    <table className="caption-top table table-striped table-sm">
                      <caption>
                        <div className='d-flex justify-content-between'>
                          <div>Lista de Novedades</div>
                          <div>
                            <button className='btn btn btn-primary' onClick={() => open({})}>
                              Crear novedad
                            </button>
                          </div>
                        </div>
                      </caption>
                        <thead>
                            <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                          {newsData
                            ? newsData.map(item => (
                                <tr key={item.id}>
                                  <td>{item.title}</td>
                                  <td>
                                      <div>
                                          <img src={item.image} width="90" alt={item.title} />
                                      </div>
                                  </td>
                                  <td>{item.category}</td>
                                  <td>
                                    <button className="btn btn-lg btn-primary me-2" onClick={() => open(item)}><BsPencil /></button>
                                    <button className="btn btn-lg btn-danger" onClick={() => open({item, delete: true})}><BsTrash /></button>
                                  </td>
                                </tr>
                            ))
                          : null}
                        </tbody>
                    </table>
                </div>
            </section>
            <AnimatePresence inital={false} exitBeforeEnter={true}>
              {modal && (
                <Modal
                  modal={modal}
                  data={newsActData}
                  handleClose={close}
                  onSubmit={handleSubmit}
                />
              )}
            </AnimatePresence>
        </>
    )
}

export default NewsBackoffice;