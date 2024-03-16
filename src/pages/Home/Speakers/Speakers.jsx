import React from 'react';
import './Speakers.css'
const Speakers = ({ speaker }) => {
    const { title, des, image } = speaker;
    return (
        <div className='speaker-div mt-3 mt-md-5'>
            <div className='text-center speaker-img position-relative'>
                <img src={image} alt="" />
                <div className="img-overlay"></div>
            </div>
            <div className='text-center'>
                <h4 className='speaker-title fs-3 fw-bold mt-3'>{title}</h4>
                <p className='fw-medium fs-5'>{des}</p>
            </div>
        </div>
    );
};

export default Speakers;