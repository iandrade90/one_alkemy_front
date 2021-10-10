import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import { deleteService, getAllService, postService, updateService } from "../../services";
import { BsPencil, BsTrash } from "../../icons/index";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const NewsBackoffice = () => {
  const [modal, setModal] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [newsActData, setNewsActData] = useState({});

  const close = () => {
    setNewsActData({});
    setModal(false);
  };

  const open = (data) => {
    setNewsActData(data);
    setModal(true);
  };

  useEffect(() => {
    getAllService("news").then((res) =>
      setNewsData(res.data));
  }, []);

  const handleSubmit = async (payload) => {
    let newNewsList;

    if (payload.type === "delete") {
      await deleteService(`news/${payload.data.id}`);

      newNewsList = newsData.filter((news) => news.id !== payload.data.id);
      setNewsData(newNewsList);
    } else {
      //? Si el payload no llega con un id => la actividad no existe
      const newsExists = payload.id || false;

      if (!newsExists) {
        //? Creo una nueva actividad
        const { data } = await postService("news", {
          name: payload.name,
          image: payload.image,
          content: payload.content,
          type: payload.type,
        });

        newNewsList = newsData.concat({
          id: data.id,
          name: data.name,
          image: data.image,
          content: data.content,
          type: data.type,
        });
        console.log(newNewsList);
      } else {
        //? Caso contrario, edita la actividad en funcion del id que me llega
        await updateService(`news/${payload.id}`, {
          name: payload.name,
          image: payload.image,
          content: payload.content,
          type: payload.type,
        })

        newNewsList = newsData.map((news) => {
          if (news.id === payload.id) {
            return {
              id: payload.id,
              name: payload.name,
              image: payload.image,
              content: payload.content,
              type: payload.type,
            };
          }

          return news;
        });
      }
    }
    setNewsData(newNewsList);
    close();
  };

  return (
    <>
      <section className="border-bottom">
        <div className="table-responsive">
          <table className="caption-top table table-striped table-sm">
            <caption>
              <div className="d-flex justify-content-between">
                <div>Lista de Novedades</div>
                <div>
                  <button
                    className="btn btn btn-primary"
                    onClick={() => open({})}
                  >
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
                ? newsData.map((item) => (
                  <tr key={item.id} className='align-middle'>
                      <Route>
                        <td>
                          <div className="link-activity" colSpan="2">
                            <Link to={`/backoffice/news/${item.id}`}>
                              {item.name}
                            </Link>
                          </div>
                        </td>
                      </Route>
                      <td>
                        <div>
                          <img src={item.image} width="90" alt={item.name} />
                        </div>
                      </td>
                      <td>{item.type}</td>
                      <td>
                        <button
                          className="btn btn-lg btn-primary me-2"
                          onClick={() => open(item)}
                        >
                          <BsPencil />
                        </button>
                        <button
                          className="btn btn-lg btn-danger"
                          onClick={() => open({ item, delete: true })}
                        >
                          <BsTrash />
                        </button>
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
  );
};

export default NewsBackoffice;
