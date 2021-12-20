import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../../App.css'
import Carousel from 'react-bootstrap/Carousel'

function Home () {
    return (
        <>
        <Carousel fade>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/img1-sm.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>LIVING IN THE GREEN</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/img2-sm.jpg"
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h3>KAARLO SARKIAN KATU APARTMENTS</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/img3-sm.jpg"
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
