import React from 'react';
import Footer from '../Footer';
import { useState ,useRef } from 'react';
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import BuildingPhysicsAppMat from './BuildingPhysicsApp1';

const BuildingPhysicsApp = () => {
    const [projectName, setProjectName] = useState("");
    const [projectOwner, setProjectOwner] = useState("");
    const [projectCity, setProjectCity] = useState("");
    const [projectTe, setProjectTe] = useState(null);
    const [projectTi, setProjectTi] = useState(null);
    const [projectA, setProjectA] = useState(null);
    const [projectTransType, setProjectTransType] = useState("");
    const [projectNumberOfLayers, setProjectNumberOfLayers] = useState(null);
    const [projectOrientation, setProjectOrientation] = useState("");
    

    async function uploadInfo() {
        const date= new Date();
        var requestOptionsProject = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            name: projectName,
            owner: projectOwner,
            city: projectCity,
            Te: projectTe,
            Ti: projectTi,
            A: projectA,
            transType: projectTransType,
            numberOfLayers: projectNumberOfLayers,
            orientation: projectOrientation,
            updated: date
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/general-info`,
          requestOptionsProject); 
      }
      
    


    return (
        <>
        <div class="container">
            <div class="py-5 text-center">
              <img class="mb-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/buildingPhysics/trisco.png" 
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
              value={projectName}
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
              value={projectOwner}
              type="text"
              onChange={e => setProjectOwner(e.target.value)}
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
              value={projectCity}
              type="text"
              onChange={e => setProjectCity(e.target.value)}
              />     
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Outdoor Temperature</Form.Label>
            <InputGroup className="mb-2">
            <Form.Select defaultValue="Choose..." onChange={(e) => {
              const selectedTemperature = e.target.value;
              setProjectTe(Number(selectedTemperature));
              }}>
             <option value="null">Choose...</option>
             <option value={-7}>-7</option>
             <option value={-8}>-8</option>
             <option value={-9} >-9</option>
             <option value={-10}>-10</option>
             <option value={-11}>-11</option>
            </Form.Select>
            <InputGroup.Text>°C</InputGroup.Text>
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Room Temperature</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="20" 
              required
              value={projectTi}
              type="number"
              onChange={e => setProjectTi(Number(e.target.value))}
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
              value={projectNumberOfLayers}
              onChange={e => setProjectNumberOfLayers(Number(e.target.value))}
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
              value={projectA}
              onChange={e => setProjectA(Number(e.target.value))}
              />
              <InputGroup.Text>m²</InputGroup.Text>   
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Orientation</Form.Label>
            <InputGroup className="mb-2">
            <Form.Select defaultValue="Choose..." onChange={(e) => {
              const selectedOrientation = e.target.value;
              setProjectOrientation(selectedOrientation);
              }}>
             <option value="null">Choose...</option>
             <option value="H">Wall</option>
             <option value="VUp">Ceiling</option>
             <option value="VDown">Floor</option>
            </Form.Select>
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Type of Transmision</Form.Label>
            <InputGroup className="mb-2">
            <Form.Select defaultValue="Choose..." onChange={(e) => {
              const selectedTransType = e.target.value;
              setProjectTransType(selectedTransType);
              }}>
             <option>Choose...</option>
             <option value="ie">Directly to the exterior</option>
             <option value="iue" disabled>Through unheated space</option>
             <option value="ig" disabled>Through the ground</option>
             <option value="ij" disabled>To or from spaces at different temperatures</option>
            </Form.Select>
            </InputGroup>
        </Col>
        </Row>
        <div>
        <Button onClick={uploadInfo} className="btn mb-2 btn-danger" type="submit">Submit</Button>
        <Button href="/building-physics-app1" className="btn mb-2 btn-primary" type="button">Next</Button>
        </div>
      </Form>
      </div>
      </div>

       


        <Footer/>
       </>
    )
}

export default BuildingPhysicsApp;
