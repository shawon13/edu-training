import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import feature1 from '../../../assets/feature-icon-1.png'
import feature2 from '../../../assets/feature-icon-2.png'
import feature3 from '../../../assets/feature-icon-3.png'
import feature4 from '../../../assets/feature-icon-4.png'
const Features = () => {
    return (
        <section className='padding' style={{ backgroundColor: '#F9FAFC' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div>
                            <h2 className='fw-bold' style={{ fontSize: '50px', marginBottom: '100px' }}>Why attend conference</h2>
                            <Card style={{ padding: '40px 45px 50px' }}>
                                <Card.Img variant="top mb-4" style={{ width: '100px' }} src={feature1} />
                                <Card.Body className='p-0'>
                                    <Card.Title className='fs-4 fw-bold mb-4'>Trainings & Awards</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <Card style={{ padding: '40px 45px 50px', marginBottom: '30px' }}>
                                <Card.Img variant="top mb-4" style={{ width: '100px' }} src={feature2} />
                                <Card.Body className="p-0">
                                    <Card.Title className='fs-4 fw-bold mb-4'>World Class Speaker</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ padding: '40px 45px 50px' }}>
                                <Card.Img variant="top mb-4" style={{ width: '100px' }} src={feature3} />
                                <Card.Body className="p-0">
                                    <Card.Title className='fs-4 fw-bold mb-4'>Evening Concert</Card.Title>
                                    <Card.Text>
                                        We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <Card style={{ padding: '40px 45px 50px', marginTop: '80px' }}>
                                <Card.Img variant="top mb-4" style={{ width: '100px' }} src={feature4} />
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