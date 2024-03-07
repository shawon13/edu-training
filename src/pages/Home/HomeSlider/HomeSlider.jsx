import React from 'react';
import './HomeSlider.css'
const HomeSlider = ({ slide }) => {

    return (
        <div className='position-relative'>
            <div className='slider-overlay'>
            </div>
            <img src={slide.image} className='w-100' alt="" />
        </div>
    );
};

export default HomeSlider;