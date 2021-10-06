import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import heightBackside from "./style.js";
import { useParams } from "react-router-dom";
import { getAllService } from "../../services";

const DetailsCard = () => {
  let { id } = useParams();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [content, setContent] = useState();
  const [type, setType] = useState();
  const [isFound, setIsFound] = useState(false);
  //Al montarse el componente recojemos los datos del endpoint
  useEffect(() => {
    const data = getAllService(`/news/${id}`);
    data.then((res) => {
      setImage(res.data.image);
      setName(res.data.name);
      setContent(res.data.content);
      setType(res.data.type);
      res && setIsFound(true);
    });
  }, []);
  //Si se trajeron datos estos se renderizan de otra forma no se hace para no generar errores
  useEffect(() => {
    if (isFound) heightBackside();
  }, [isFound]);

  return isFound ? (
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-8 mx-auto mt-sm-3">
        {/* Cara delantera de la tarjeta */}
        <div className="image-flip">
          <div className="mainflip flip-0">
            <div className="frontside">
              <div className="card cardFront" width="100%">
                <div className="card-body text-center">
                  <img className="card-img" src={image} alt="card image" />
                </div>
                <h4 className="title-card">{name}</h4>
              </div>
            </div>

            {/* Cara trasera de la tarjeta */}
            <div className="backside">
              <div className="card cardBack">
                <div className="card-body2 text-center">
                  <div className="text-card">
                    {content ? <p>Contenido: {content}</p> : null}

                    {type ? <p>tipo: {type}</p> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailsCard;
