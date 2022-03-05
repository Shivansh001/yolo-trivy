import React from 'react';
import Slider from 'infinite-react-carousel';
import './carousel.css'
import brand from "../../assets/brand.png"
import brand1 from "../../assets/brand1.png"
import brand2 from "../../assets/brand2.png"
import brand3 from "../../assets/brand3.png"
import brand4 from "../../assets/brand4.png"
import brand5 from "../../assets/brand5.png"
import brand6 from "../../assets/brand6.svg"
import brand7 from "../../assets/brand7.svg"


const Carousel = () => {
    return (
        <div className="slider">
            <Slider dots arrows={false} autoplay={true} pauseOnHover={true} swipe={true} className="slider">
            <div className='slider-component'>
                <img src={brand} className="slider-logo"/>
            </div>
            <div className="slider-component">
            <img src={brand1} className="slider-logo"/>
            </div>
            <div className="slider-component">
            <img src={brand2} className="slider-logo"/>
            </div>
        </Slider>
        
        </div>
    )        
};

export default Carousel;