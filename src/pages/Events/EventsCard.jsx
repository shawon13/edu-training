import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const EventsCard = ({ event }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={event.image_url} />
                <Card.Body>
                    <Card.Title className='fs-2 fw-bold text-capitalize'>{event.title}</Card.Title>
                    <Card.Text>
                        {event.details.slice(0, 150)}...
                    </Card.Text>
                    <p className='fs-3 fw-medium'><FontAwesomeIcon icon={faDollar} /> {event.price}</p>
                    <Link to={`/event/${event.id}`} className='btn btn-outline-dark fs-5 fw-medium'>Event Details</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EventsCard;