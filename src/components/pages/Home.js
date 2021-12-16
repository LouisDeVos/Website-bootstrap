import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../../App.css'
import Carousel from 'react-bootstrap/Carousel'
import Footer from '../Footer';
import slide1 from '../../images/img1-sm.jpg'
import slide2 from '../../images/img2-sm.jpg'
import slide3 from '../../images/img3-sm.jpg'

function Home () {
    return (
        <>
        <Carousel fade>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        src={slide1}
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>LIVING IN THE GREEN</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        src={slide2}
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h3>KAARLO SARKIAN KATU APARTMENTS</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        src={slide3}
                        alt="Third slide" />
                    <Carousel.Caption>
                        <h3>THE SURRY</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </>
    )
}

export default Home;
