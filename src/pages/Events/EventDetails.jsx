import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const EventDetails = () => {
    const event = useLoaderData()
    const { title, details, image_url, price } = event;
    return (
        <div className='py-5'>
            <h2 className='text-center fs-1 mb-4'>Event Details</h2>
            <Card className='mx-auto' style={{
                width: '35rem'
            }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='text-center'>
                    <Card.Title className='fs-2 fw-bold text-capitalize'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p className='fs-3 fw-medium'><FontAwesomeIcon icon={faDollar} /> {price}</p>
                    <Link to='' className='btn btn-outline-dark fs-5 fw-medium text-capitalize'>Purchase tickets</Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default EventDetails;