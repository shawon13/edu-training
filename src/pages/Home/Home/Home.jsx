import React from 'react';
import './Home.css'
import HomeSlider from '../HomeSlider/HomeSlider';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import HomeEvents from '../HomeEvents/HomeEvents';
import Features from '../Features/Features';
import Speakers from '../Speakers/Speakers';
const Home = () => {
    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/yY1g2z3/Untitled-design-1.jpg"
        },
        {
            id: 2,
            image: "https://i.ibb.co/tX9JLzK/Untitled-design.jpg"
        },
        {
            id: 3,
            image: "https://i.ibb.co/bJpsNvH/img4.jpg"
        },
        {
            id: 4,
            image: "https://i.ibb.co/H4z82Sz/img3.jpg"
        },
        {
            id: 5,
            image: "https://i.ibb.co/1qmxy41/img2.jpg"
        },
        {
            id: 6,
            image: "https://i.ibb.co/qBNrhZn/img1.jpg"
        }
    ]
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    // events
    const events = useLoaderData();
    // speakers

    const speakers = [
        {
            id: 1,
            image: "https://i.ibb.co/M5fJpCq/speaker1.jpg",
            title: "James Killer",
            des: "Founder"
        },
        {
            id: 2,
            image: "https://i.ibb.co/D799YkH/speaker2.jpg",
            title: "Melisa Rock",
            des: "Lead Designer"
        },
        {
            id: 3,
            image: "https://i.ibb.co/rcgbbg6/speaker3.jpg",
            title: "Agaton Ronald",
            des: "Developer Expert"
        },
        {
            id: 4,
            image: "https://i.ibb.co/Y3bykn8/speaker4.jpg",
            title: "Devid Arone",
            des: "Co-Founder"
        },
        {
            id: 5,
            image: "https://i.ibb.co/RDY32g9/speaker5.jpg",
            title: "Lucy Melisa",
            des: "MarKeter"
        },
        {
            id: 6,
            image: "https://i.ibb.co/pWJF1nv/speaker6.jpg",
            title: "Fredric Martin",
            des: "Event Manager"
        },
        {
            id: 7,
            image: "https://i.ibb.co/X3Hc1gR/speaker7.jpg",
            title: "Laura Bryant",
            des: "Lead Speaker"
        },
        {
            id: 8,
            image: "https://i.ibb.co/BjM2qk2/speaker8.jpg",
            title: "Henri Robert",
            des: "Founder, Cards"
        }
    ]
    return (
        <div>
            {/* slider Section Start */}
            <Slider {...settings}>
                {
                    slides.map(slide => <HomeSlider key={slide.id} slide={slide}></HomeSlider>)
                }
            </Slider>
            {/* Event Section Start */}
            <section className='padding home-event'>
                <Container>
                    <h2 className='text-center fw-bold home-event-title'>Events</h2>
                    <p className='text-center mx-auto w-75 mt-3 mb-5 event-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam et alias, vero eos consectetur molestiae quis modi repudiandae maxime possimus atque asperiores doloremque harum sunt eum? Labore fuga culpa ab.</p>
                    <Row xs={1} md={2} className="g-4">
                        {
                            events.map(event => <HomeEvents key={event.id} event={event}></HomeEvents>)
                        }
                    </Row>
                </Container>
            </section>
            {/* Features Section start */}
            <Features />
            {/* speaker section start */}
            <section className='speaker padding'>
                <Container>
                    <p className='text-center fw-bold'>LISTEN TO THE</p>
                    <h2 className='text-center fw-bold' style={{ fontSize: '60px', marginBottom: '80px' }}>Event Speakers</h2>
                    <Row xs={1} sm={2} md={3} xl={4} className="g-4">
                        {
                            speakers.map(speaker => <Speakers key={speaker.id} speaker={speaker}></Speakers>)
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;