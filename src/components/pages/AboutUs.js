import React from 'react';
import Footer from '../Footer';
import { Col, Row } from 'react-bootstrap';

const AboutUs = () => {
   return(<>
    <div className='container'>
      <Row>
          <Col>
          <h2 className='pt-5'>We are <b>META</b>.</h2>
          <p className='py-3'>With sustainability at the heart of everything we do, our focus is on maximizing our impact aimed at improving quality of life.<br/> The solutions we develop address important societal challenges around resilience, places, and mobility.<br/>Leveraging data and technology, we have the capabilities and services to meet client demands driven by global trends such as urbanization, climate change, digitalization, evolving stakeholder expectations and potential unforeseeable events.</p>
          </Col>
          <Col>
          <img className="my-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/about-us-img.jpg"
              width="1000"
          /> 
          </Col>
      </Row>
      <Row>
          <Col>
          
          </Col>
      </Row>
    </div>

   <Footer/>
        </>
   )
}

export default AboutUs
