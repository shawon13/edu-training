import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import EventsCard from './EventsCard';

const Events = () => {
    const events = useLoaderData()
    return (
        <section className='padding'>
            <Container>
                <h2 className='text-center fw-bold' style={{ fontSize: '60px' }}>Events</h2>
                <p className='text-center mx-auto w-75 mt-3 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam et alias, vero eos consectetur molestiae quis modi repudiandae maxime possimus atque asperiores doloremque harum sunt eum? Labore fuga culpa ab.</p>
                <Row xs={1} md={2} className="g-4">
                    {
                        events.map(event => <EventsCard key={event.id} event={event}></EventsCard>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Events;