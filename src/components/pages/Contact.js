import React from 'react';
import Footer from '../Footer';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
   return(<>
    <div className='container'>
      <Row>
          <Col>
          <h2 className='pt-5'>Contact</h2>
          <h5 className='pt-5'> Offices Europe</h5>
          <p className='py-3'>227 Av. de Tervueren<br/> 1150 Woluwe-Saint-Pierre <br/>(Brussels)<br/>Belgium<br/>+32 (0)27 70 52 85<br/>info.europe@METAengineering.com</p>
          <h5 className='pt-4'>Offices Oceania</h5>
          <p className='py-3'>41-49 Bank St<br/>3205 South Melbourne <br/> Australia<br/>+61 1300 888 770<br/>info.oceania@METAengineering.com</p>
          </Col>
          <Col>
          <img className="my-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/contact-img.jpg"
              alt='A big office...'
              width="900"
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

export default Contact;

