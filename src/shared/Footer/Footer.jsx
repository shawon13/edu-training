import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='bg-black py-5'>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='text-white'>
                            <h2>EduTraining</h2>
                            <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='text-white'>
                            <h4>Events</h4>
                            <ul className='p-0'>
                                <li className='list-unstyled my-2'>Workshops and Webinars</li>
                                <li className='list-unstyled my-2'>Career Fairs</li>
                                <li className='list-unstyled my-2'>Educational Conferences</li>
                                <li className='list-unstyled my-2'>Training Programs</li>
                                <li className='list-unstyled my-2'>Skill Development and Lifelong Learning</li>
                                <li className='list-unstyled my-2'>EdTech Innovation</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='text-white'>
                            <h4>Link</h4>
                            <ul className='p-0'>
                                <li className='list-unstyled my-2'>
                                    <Link to='/' className='text-white'>Home</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='about' className='text-white'>About</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='events' className='text-white'>Events</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='blog' className='text-white'>Blog</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='contact' className='text-white'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='text-white'>
                            <h4>Get In Touch</h4>
                            <FontAwesomeIcon className='border border-1 p-2 rounded-circle' style={{ width: '20px', height: '20px' }} icon={faFacebook} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-circle ms-3' style={{ width: '20px', height: '20px' }} icon={faTwitter} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-circle ms-3' style={{ width: '20px', height: '20px' }} icon={faInstagram} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;