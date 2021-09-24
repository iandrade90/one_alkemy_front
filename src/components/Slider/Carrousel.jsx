
import React from 'react';



const Carousel = ({arrayCarousel}) =>{   

        return(         
            <div id="carouselExampleCaptions" className="carousel slide w-75 mt-5 " data-bs-ride="carousel" >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-30" >
              <div className="carousel-item active">
                <img src={arrayCarousel[0].imageUrl} className="d-block w-100  " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>{arrayCarousel[0].text} </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={arrayCarousel[1].imageUrl} className="d-block w-100  " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>{arrayCarousel[1].text}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={arrayCarousel[2].imageUrl} className="d-block w-100  " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>{arrayCarousel[2].text} </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );

}


export default Carousel;