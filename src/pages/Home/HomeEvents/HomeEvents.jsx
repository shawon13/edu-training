import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeEvents = ({ event }) => {
    const { id, title, details, image_url, price } = event;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fs-2 fw-bold text-capitalize'>{title}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 200)}....
                    </Card.Text>
                    <p className='fs-3 fw-medium'><FontAwesomeIcon icon={faDollar} /> {price}</p>
                    <Link to={`/event/${id}`} className='btn btn-outline-dark fs-5 fw-medium'>Event Details</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeEvents;