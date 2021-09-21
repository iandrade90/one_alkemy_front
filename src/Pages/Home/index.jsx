import React from 'react';
import { Slider } from '../../components';
import {Link} from "react-router-dom";
require('./index.css');

const Home = () => {

    const data = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvcoc5qgyMC8oK5J9D31yN1V-avGCAAycCg&usqp=CAU",
            title: "lorem Ipsum dolor sit amet",
            content: "Suspendisse potenti. Nunc aliquet posuere ipsum eu posuere. Sed convallis nec eros in sagittis.",
            category: "Test",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvcoc5qgyMC8oK5J9D31yN1V-avGCAAycCg&usqp=CAU",
            title: "lorem Ipsum dolor sit amet",
            content: "Suspendisse potenti. Nunc aliquet posuere ipsum eu posuere. Sed convallis nec eros in sagittis.",
            category: "Test",
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvcoc5qgyMC8oK5J9D31yN1V-avGCAAycCg&usqp=CAU",
            title: "lorem Ipsum dolor sit amet",
            content: "Suspendisse potenti. Nunc aliquet posuere ipsum eu posuere. Sed convallis nec eros in sagittis.",
            category: "Test",
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvcoc5qgyMC8oK5J9D31yN1V-avGCAAycCg&usqp=CAU",
            title: "lorem Ipsum dolor sit amet",
            content: "Suspendisse potenti. Nunc aliquet posuere ipsum eu posuere. Sed convallis nec eros in sagittis.",
            category: "Test",
        }
    ]

    return(
        <div className="container-fluid bg-blue py-5">
            <Slider/>
            <h1 className="text-center my-4">Welcome Text</h1>
            <h2 className="text-center my-4">Novedades</h2>
            <div className="row">
                {data.map((news) => (
                    <div className="col-sm-12 col-lg-3 my-2">
                        <div className="card border-0 news-home shadow-sm">
                            <div className="news-home-image-container">
                                <div className="news-home-image">
                                    <Link to={"/news/"+news.id}>
                                        <img src={news.image} className="card-img-top" alt={news.title} />
                                    </Link>
                                </div>
                                <a href="#" className="btn-primary news-home-category">{news.category}</a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text">{news.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;