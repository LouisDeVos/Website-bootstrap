import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Footer from '../../Footer';
import Project1Carousel from './Project1Carousel';

const Project1 = () => {
    return (
        <>
        <div className='container'>
        <Row>
            <Col className='py-5'>
            
            <h4>LIVING IN THE GREEN – HEGENHEIMERSTRASSE</h4>
            <h5>ITTEN + BRECHBÜHL</h5>
            
            </Col>
            <Col className='py-5'>
              <Row>
              <span className="text-center text-md-right px-2"><b>LOCATION</b> Basel, Zwitzerland</span>
              <span className="text-center text-md-right px-2"><b>PROJECT YEAR</b> 2020</span> 
              </Row>           
            </Col>
        </Row>
        <Row>
        <Col> 
        
            <Project1Carousel/>  
            
            <div >
            </div>
        
        </Col>
        <Col>
          <p className='align-middle'>The place is an old work yard, typical for Basel and the quarter. It is one of the few city blocks that has never been completely closed by buildings in the course of its history. This encouraged us to let the building, as it were, peep out of the courtyard. In addition, the client has a quite personal relation to the site, as he started his professional careers in that very place. <br/>
In this respect, personal relationships with the location, memories of the history of use and a typological peculiarity come together as influencing factors for the creation of this building.<br/>
The proximity to the surrounding buildings also plays a role. We were looking for an expression that works from a close-up perspective, as well as from a side view: You move along the building and see it up close. The building never appears in a conventional elevation, as it is usually drawn. The building is consistently designed as a house in the courtyard.<br/>
Shape, materialization and construction are translations of the simple utility buildings traditionally to be found in Basel courtyards. The shape adapts to the shape of the courtyard and the materials are simple and robust. Slight alienation and ennoblement of the elements speak of the changed use of the courtyard and building as a place of residence.</p>
        </Col>        
        </Row>
        </div>

        <Footer/>
        </>
    )
}

export default Project1;
