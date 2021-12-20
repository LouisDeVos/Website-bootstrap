import React from 'react';
import Footer from '../Footer';
import { useState } from 'react';
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';

const BuildingPhysicsApp = () => {
    const [projectName, setProjectName] = useState(null);
    const [owner, setOwner] = useState(null);
    const [Ti, setTi] = useState(null);
    const [A, setA] = useState(null);
    const [numberOfLayers, setNumberOfLayers] = useState(null);
    const [projectCity, setProjectCity] = useState(null);
    const [transType, setTransType] = useState(null);
    const [orientation, setOrientation] = useState(null);
    const [layNumber, setLayNumber] = useState(null);
    const [layThickness, setLayThickness] = useState(null);
    const [layMat,setLayMat]= useState(null);

    async function uploadInfo() {
        var requestOptionsInfo = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            name: projectName,
            owner: owner,
            city: projectCity,
            temp: Ti,
            surface: A,
            type: transType,
            layers: numberOfLayers,
            orientation: orientation
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/general-info`,
          requestOptionsInfo);
      }

      async function uploadContruction() {
        var requestOptionsCity = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            layerNumber: layNumber,  
            material: layMat,
            thickness: layThickness
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction/${layNumber}`,
          requestOptionsCity
        );
      }  


  
    return (
        <>
        <div class="container">
            <div class="py-5 text-center">
              <img class="mb-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/trisco.png" 
              alt="Trisco DB Logo" 
              width="105"/>
            <h2>Building Physics App</h2>
            <p class="lead">Calculate the Transmission Heat Loss through a Building Part (EN 12831)</p>
            </div>
        </div>
     <div class="container">
     <div className='m-5'>
     <h4 className="mb-3">General Info</h4>  
     <Form noValidate>
        <Row className="align-items-center">
        <Col className="mb">
            <Form.Label>Project Name</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="text"
              onChange={e => setProjectName(e.target.value)}
              placeholder="My fantastic project"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Owner</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="A very lucky owner" 
              required
              type="text"
              onChange={e => setOwner(e.target.value)}
              />  
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>City</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="Gent" 
              required
              type="text"
              onChange={e => setProjectCity(e.target.value)}
              />  
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Room Temperature</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="20" 
              required
              type="number"
              onChange={e => setTi(e.target.value)}
              />
            <InputGroup.Text>°C</InputGroup.Text>  
            </InputGroup>
        </Col>
        </Row>
        <Row className="align-items-center">
        <Col className="mb">
            <Form.Label>Number of Material Layers</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="number"
              onChange={e => setNumberOfLayers(e.target.value)}
              placeholder="5"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Surface of Building Part</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="1" 
              required
              type="number"
              onChange={e => setA(e.target.value)}
              />
              <InputGroup.Text>m²</InputGroup.Text>   
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Orientation</Form.Label>
            <InputGroup className="mb-2">
            <Form.Select defaultValue="Choose..." onChange={e => setOrientation(e.target.value)}>
             <option>Choose...</option>
             <option>Wall</option>
             <option>Ceiling</option>
             <option>Floor</option>
            </Form.Select>
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Type of Transmision</Form.Label>
            <InputGroup className="mb-2">
            <Form.Select defaultValue="Choose..." onChange={e => setTransType(e.target.value)}>
             <option>Choose...</option>
             <option value="ie">Directly to the exterior</option>
             <option value="iue">Through unheated space</option>
             <option value="ig">Through the ground</option>
             <option value="ij">To or from spaces at different temperatures</option>
            </Form.Select>
            </InputGroup>
        </Col>
        </Row>
        <div className="d-grid gap-3">
        <Button onClick={uploadInfo} className="btn-block" type="submit">Submit</Button>
        </div> 
      </Form>
      </div>
      
     

     <div className='m-5'>
     <h4 className="mb-3">Construction Properties</h4>
     <Form noValidate>
        <Row className="align-items-center">
        <Col className="mb">
            <Form.Label>Project Name</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="text"
              onChange={e => setProjectName(e.target.value)}
              placeholder="My fantastic project"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Layer Number</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="number"
              onChange={e => setLayNumber(e.target.value)}
              placeholder="1"
            />
            </InputGroup>
        </Col>    
        <Col className="mb">
            <Form.Label>Material</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="text"
              onChange={e => setLayMat(e.target.value)}
              placeholder="rock wool"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Material Thickness</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="0.20" 
              required
              type="number"
              onChange={e => setLayThickness(e.target.value)}
              />
            <InputGroup.Text>m</InputGroup.Text>  
            </InputGroup>
        </Col>
        <div className="d-grid gap-3">
        <Button onClick={uploadContruction} className="btn-block" type="submit">Submit</Button>
        </div>
        </Row> 
      </Form>
      </div>
      </div>

       


        <Footer/>
       </>
    )
}

export default BuildingPhysicsApp;
