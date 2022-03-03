import React from 'react';
import Slider from 'infinite-react-carousel';
import './carousel.css'

const Carousel = () => {
    return (
        <div className="slider">
            <Slider dots arrows={false} autoplay={true} pauseOnHover={true} swipe={true} className="slider">
            <div >
                <h1 className="comp">"The elite  'Black Card' for entrepreneurs."</h1>
            </div>
            <div className="component">
                <h1 className="comp">"Soothes Stress with Elite Access."</h1>
            </div>
            <div className="component">
                <h1 className="comp">"FoundersCard gives entrepreneurs the VIP access they deserve."</h1>
            </div>
        </Slider>
        
        </div>
    )        
};

export default Carousel;