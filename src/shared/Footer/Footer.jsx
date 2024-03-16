import React from 'react';
import './Footer.css'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section id='footer' className='bg-black padding'>
            <Container>
                <Row>
                    <Col xs={6} sm={5} md={5} lg={4} xl={5}>
                        <div className='text-white'>
                            <h2 className='fw-bold'>EduTraining</h2>
                            <p className='w-md-75'>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                        </div>
                    </Col>
                    <Col xs={6} sm={5} md={5} lg={4} xl={3}>
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
                    <Col xs={6} sm={2} md={2} lg={1} xl={2}>
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
                    <Col xs={6} sm={12} md={12} lg={3} xl={2}>
                        <div className='text-white text-sm-center text-lg-start '>
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