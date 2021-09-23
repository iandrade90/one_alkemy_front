import React from 'react'
import Carousel from './Carrousel'

let arrayCarousel = 

[{ id:1 , imageUrl: "https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg", text: "TEXTO SLIDER 1", active: "active"},    

 { id:2 , imageUrl: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg", text: "TEXTO SLIDER 2", active: ""}, 

 { id:3 , imageUrl: "https://wowslider.com/sliders/demo-5/data/images/sweden.jpg", text: "TEXTO SLIDER 3", active: ""}

] 

function Slider() {
     
    return (
        <div className='d-flex justify-content-center'> 
            <Carousel arrayCarousel={arrayCarousel} /> 
        </div>
    )
}

export default Slider
