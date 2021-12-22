import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Footer from '../../Footer';
import Project3Carousel from './Project3Carousel';

const Project3 = () => {
    return (
        <>
        <div className='container'>
        <Row>
            <Col className='py-5'>
            
            <h4>THE SURRY, ELIZABETH STREET</h4>
            <h5>CANDALEPAS ASSOCIATES</h5>
            
            </Col>
            <Col className='py-5'>
              <Row>
              <span className="text-center text-md-right px-2"><b>LOCATION</b> Surry Hills, Australia</span>
              <span className="text-center text-md-right px-2"><b>PROJECT YEAR</b> 2019</span> 
              </Row>           
            </Col>
        </Row>
        <Row>
        <Col> 
        
            <Project3Carousel/>  
            
            <div >
            </div>
        
        </Col>
        <Col>
          <p className='align-middle'>The Surry is a 5-storey residential development that offers 24 apartments, ground floor retail tenancies and communal open space on the roof. The ground floor tenancy helps to provide a sense of street activation, whilst the apartments above are designed to offer the occupants comfort through privacy, solar amenity, pleasant visual outlooks and cross ventilation.<br/>
Situated on a busy arterial road into the city this residential development offers enormous excitement and varying experience to pedestrians and vehicles passing by. The facade of the Elizabeth Street elevation is distinctive, featuring a glittering tapestry of green and orange ceramic tiles, concrete and warm timber handrails. This vibrant streetscape interacts with the environment with changing colour and shadow through the day.<br/>
Whilst this rhythmic and colourful expression to the facade offers amenity to the street, it also provides privacy and quietness for the inhabitants.<br/>
The angular forms created by the facade orient the inhabitant to distant views diagonally down the street, whilst maintaining visual privacy between neighbouring apartments. The design, whilst contemporary in nature, is both sympathetic to the existing context as well as the desired future character of the area. Acoustic provisions have been allowed for due to the busy nature of Elizabeth Street. The balconies provide a buffer and screened external elements offer flexibility in their own configuration such that the user can personalise the level of desired attenuation based on their own needs and the variable qualities of the external environment.<br/>
The northern facade on Butt Street responds to the more narrow context with glass blocks and low windows which maximise privacy. A more subdued facade, the architectural expression makes for a well-considered facade.<br/>
Internally, the apartments are well-sized, open plan in nature, maximising on the provision of living space. They are both light-filled and well-ventilated.</p>
        </Col>        
        </Row>
        </div>

        <Footer/>
        </>
    )
}

export default Project3;
