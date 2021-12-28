/* eslint-disable no-template-curly-in-string */
import React from 'react';
import Footer from '../Footer';
import { useState } from 'react';
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';



  
      
const BuildingPhysicsDB = () => {
    const [city, setCity] = useState(null);
    const [Te, setTe] = useState(null);
    const [matName, setMatName] = useState(null);
    const [matLambda, setMatLambda] = useState(null);
    const [matThick, setMatThick] = useState(null);

    async function uploadMat() {
        var requestOptionsMat = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            name: matName,
            lambda: matLambda,
            thickness: matThick
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/materials/${matName}`,
          requestOptionsMat);
      }

      async function uploadCity() {
        var requestOptionsCity = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            city: city,
            temperature: Te
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/outdoor-temperatures/${city}`,
          requestOptionsCity
        );
      }  


  
    return (
        <>
        <div class="container">
            <div class="pt-5 text-center">
              <img class="mb-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/buildingPhysics/trisco-db.png" 
              alt="Trisco DB Logo" 
              width="80"/>
            <h2>Building Physics Database</h2>
            <p class="lead">Input Building Data in the Database.</p>
            </div>
        </div>
     <div class="container">
     <div className='m-5'>
     <h4 className="mb-3">Outdoor Temperature (NBN EN 12831 ANB:2015)</h4>  
     <Form noValidate>
        <Row className="align-items-center">
        <Col className="mb">
            <Form.Label>City</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="text"
              onChange={e => setCity(e.target.value)}
              placeholder="City"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Temperature</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="Temperature" 
              required
              type="number"
              onChange={e => setTe(e.target.value)}
              />
            <InputGroup.Text>°C</InputGroup.Text>  
            </InputGroup>
        </Col>
        <div className="d-grid gap-3">
        <Button onClick={uploadCity} className="btn-block" type="submit">Submit</Button>
        </div>
        </Row> 
      </Form>
      </div>
      
     

     <div className='m-5'>
     <h4 className="mb-3">Material Properties</h4>
     <Form noValidate>
        <Row className="align-items-center">
        <Col className="mb">
            <Form.Label>Material</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="text"
              onChange={e => setMatName(e.target.value)}
              placeholder="Material"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Lambda value</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="lambda value" 
              required
              type="number"
              onChange={e => setMatLambda(e.target.value)}
              />
            <InputGroup.Text>W/mK</InputGroup.Text>  
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Thickness</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="Thickness" 
              required
              type="number"
              onChange={e => setMatThick(e.target.value)}
              />
            <InputGroup.Text>m</InputGroup.Text>  
            </InputGroup>
        </Col>
        <div className="d-grid gap-3">
        <Button onClick={uploadMat} className="btn-block" type="submit">Submit</Button>
        </div>
        </Row> 
      </Form>
      </div>
      </div>


        <Footer/>
       </>
    )
}

export default BuildingPhysicsDB;
