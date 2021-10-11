import React, { useEffect, useState } from "react";
import { getAllService } from "../../services";
import "./style.css";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const DetailsCardBackofice = ({ section }) => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      getAllService(`${section}/${id}`)
        .then((response) => {
          setDetail(response.data);
        })
        .catch((error) => {
          setMessage(error);
        });
    }
  }, [id]);
  return (
    <>
      {message !== "" ? (
        <h4>Ocurrio un error! Vuelva a intertar mas tarde!</h4>
      ) : detail.message ? (
        <h4>{detail.message}</h4>
      ) : (
        <div className="">
          <div className="card  card__activity ">
            <div className="row g-0">
              <div className="col-xl-6">
                <div className="card-image__activity">
                  <img
                    className="card-img-top activity__img"
                    src={detail.image}
                    alt={detail.name}
                  />
                  <div className="card-caption"> {detail.name}</div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card-body ">
                  <h4 className="card-caption activity__text">
                    {" "}
                    {detail.name}
                  </h4>
                  <div className="card-text">
                    {ReactHtmlParser(detail.content)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DetailsCardBackofice;
