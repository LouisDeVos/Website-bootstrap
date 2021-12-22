import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Footer from '../../Footer';
import Project2Carousel from './Project2Carousel';

const Project2 = () => {
    return (
        <>
        <div className='container'>
        <Row>
            <Col className='py-5'>
            
            <h4>KAARLO SARKIAN KATU APARTMENTS</h4>
            <h5>PLAYA ARCHITECTS</h5>
            
            </Col>
            <Col className='py-5'>
              <Row>
              <span className="text-center text-md-right px-2"><b>LOCATION</b> Espoo, Finland</span>
              <span className="text-center text-md-right px-2"><b>PROJECT YEAR</b> 2020</span> 
              </Row>           
            </Col>
        </Row>
        <Row>
        <Col> 
        
            <Project2Carousel/>  
            
            <div >
            </div>
        
        </Col>
        <Col>
          <p className='align-middle'>The project is located in the new neighbourhood of Vermonnitty in Espoo, Finland.<br/>
The residential building is low-cost state subsidized rental housing with a variety of different apartments.<br/>
Building is characterized by the red concrete façade and the rigorous grid of glazed balconies. Facade is of prefabricated red concrete elements with horizontal stripes of undulating exposed aggregate.</p>
        </Col>        
        </Row>
        </div>

        <Footer/>
        </>
    )
}

export default Project2;

