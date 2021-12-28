import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Project1Carousel () {
    return (
        <>
        <Carousel fade>
                <Carousel.Item className="carousel-item" interval={3000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project1/1-car1.jpg"
                        alt="First slide" />
                </Carousel.Item>

                <Carousel.Item className="carousel-item" interval={3000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project1/1-car2.jpg"
                        alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item className="carousel-item" interval={3000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project1/1-car3.jpg"
                        alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item className="carousel-item" interval={3000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project1/1-car4.jpg"
                        alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            </>
    )
}

export default Project1Carousel;
