import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import { Card,Button, Container, Row,Col } from 'react-bootstrap'

function Contact () {
    return (
        <>
    <Container>
      <Row>
        <Col xs={6} md={4} className='py-3' >
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="http://localhost:5000/Louis-De-Vos/data/images/projects/project1/img1.jpg" />
        <Card.Body>
          <Card.Title>LIVING IN THE GREEN</Card.Title>
          <Card.Text>
          <h5>Basel, Switzerland</h5>
          <p>The place is an old work yard, typical for Basel and the quarter. It is one of the few city blocks that has never been completely closed by buildings in the course of its history. This encouraged us to let the building, as it were, peep out of the courtyard. In addition, the client has a quite personal relation to the site, as he started his professional careers in that very place...</p>
          </Card.Text>
          <Button href="/project1" variant="secondary">Learn more</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={6} md={4} className='py-3'>
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="http://localhost:5000/Louis-De-Vos/data/images/projects/project2/img2.jpg" />
        <Card.Body>
          <Card.Title>KAARLO SARKIAN KATU APARTMENTS</Card.Title>
          <Card.Text>
          <h5>Espoo, Finland</h5>
          <p>The project is located in the new neighbourhood of Vermonnitty in Espoo, Finland.
               The residential building is low-cost state subsidized rental housing with a variety of different apartments.
               Building is characterized by the red concrete façade and the rigorous grid of glazed balconies. Facade is of prefabricated red concrete elements with horizontal stripes of...</p>
          </Card.Text>
          <Button href="/project2" variant="secondary">Learn more</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={6} md={4} className='py-3'><Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="http://localhost:5000/Louis-De-Vos/data/images/projects/project3/img3.jpg" />
        <Card.Body>
          <Card.Title>THE SURRY</Card.Title>
          <Card.Text>
           <h5>Surry Hills, Australia</h5>
           <p>The Surry is a 5-storey residential development that offers 24 apartments, ground floor retail tenancies and communal open space on the roof. The ground floor tenancy helps to provide a sense of street activation, whilst the apartments above are designed to offer the occupants comfort through privacy, solar amenity, pleasant visual outlooks and cross ventilation.
Situated on a busy arterial road...</p>
          </Card.Text>
          <Button href="/project3" variant="secondary">Learn more</Button>
        </Card.Body>
      </Card></Col>
      </Row>
    </Container> 
    <Footer/>
    </>
    )
}

export default Contact;