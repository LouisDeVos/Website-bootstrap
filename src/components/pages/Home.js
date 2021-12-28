import React from 'react';
//import './Home.css'
import Carousel from 'react-bootstrap/Carousel'

function Home () {
    return (
        <>
        <Carousel fade>
                <Carousel.Item className="carousel-item" interval={3000}>
                    <a href="/project1">
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project1/img1-sm.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>LIVING IN THE GREEN</h3>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>

                <Carousel.Item className="carousel-item" interval={3000}>
                    <a href="/project2">
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project2/img2-sm.jpg"
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h3>KAARLO SARKIAN KATU APARTMENTS</h3>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>

                <Carousel.Item className="carousel-item" interval={3000}>
                    <a href="/project3">
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://localhost:5000/Louis-De-Vos/data/images/projects/project3/img3-sm.jpg"
                        alt="Third slide" />
                    <Carousel.Caption>
                        <h3>THE SURRY</h3>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
            </Carousel>
            </>
    )
}

export default Home;
