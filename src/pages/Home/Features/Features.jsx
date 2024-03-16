import React, { useEffect } from 'react';
import './Features.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import feature1 from '../../../assets/feature-icon-1.png'
import feature2 from '../../../assets/feature-icon-2.png'
import feature3 from '../../../assets/feature-icon-3.png'
import feature4 from '../../../assets/feature-icon-4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <section className='padding features' style={{ backgroundColor: '#F9FAFC' }}>
            <Container>
                <Row>
                    <Col md={6} lg={4}>
                        <div className='training-card'>
                            <h2 data-aos="fade-up" className='fw-bold title-features' style={{ fontSize: '60px', marginBottom: '100px' }}>Why attend conference</h2>
                            <Card className='text-center text-md-start' data-aos="fade-right" style={{ padding: '40px 45px 50px' }}>
                                <Card.Img variant="top mb-4 mx-auto mx-md-0" style={{ width: '100px' }} src={feature1} />
                                <Card.Body className='p-0'>
                                    <Card.Title className='fs-4 fw-bold mb-4'>Trainings & Awards</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div>
                            <Card className='text-center text-md-start' data-aos="fade-down" style={{ padding: '40px 45px 50px', marginBottom: '30px' }}>
                                <Card.Img variant="top mb-4 mx-auto mx-md-0" style={{ width: '100px' }} src={feature2} />
                                <Card.Body className="p-0">
                                    <Card.Title className='fs-4 fw-bold mb-4'>World Class Speaker</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-center text-md-start' data-aos="fade-up" style={{ padding: '40px 45px 50px' }}>
                                <Card.Img variant="top mb-4 mx-auto mx-md-0" style={{ width: '100px' }} src={feature3} />
                                <Card.Body className="p-0">
                                    <Card.Title className='fs-4 fw-bold mb-4'>Evening Concert</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='three-days-card' style={{ marginTop: '80px' }}>
                            <Card className='text-center text-md-start' data-aos="fade-up-left" style={{ padding: '40px 45px 50px' }}>
                                <Card.Img variant="top mb-4 mx-auto mx-md-0" style={{ width: '100px' }} src={feature4} />
                                <Card.Body className="p-0">
                                    <Card.Title className='fs-4 fw-bold mb-4'>3 Days Conference</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;