import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getAllService } from '../../services';
import './ActivityDetail.css';

const ActivityDetail = () => {

    const [activityDetail, setActivityDetail] = useState({})

    useEffect(() => {
        getAllService('/organizations/1/public')
            .then((response) => {
                console.log(response.data)
                setActivityDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setActivityDetail]);
    return (
        <>

            <div className="">
                <div className="card  card__activity " >
                    <div className="row g-0">
                        <div className="col-xl-6">
                            <div className="card-image__activity ">
                                <img className="card-img-top activity__img" src="http://adamthemes.com/demo/code/cards/images/blog01.jpeg" alt="blog" />
                                <div className="card-caption"> Quisque a bibendum magna </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card-body ">
                                <h4 className="card-caption activity__text"> Quisque a bibendum magna </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                                    {activityDetail.welcomeText}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default ActivityDetail
