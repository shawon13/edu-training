import React from 'react';
import './Speakers.css'
const Speakers = ({ speaker }) => {
    const { title, des, image } = speaker;
    return (
        <div className='speaker-div mt-5 position-relative'>
            <div className='text-center speaker-img'>
                <img src={image} alt="" />
            </div>
            <div className="img-overlay"></div>
            <div className='text-center'>
                <h4 className='speaker-title fs-3 fw-bold mt-3'>{title}</h4>
                <p className='fw-medium'>{des}</p>
            </div>
        </div>
    );
};

export default Speakers;