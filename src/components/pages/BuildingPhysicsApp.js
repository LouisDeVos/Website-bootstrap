import React from 'react';
import Footer from '../Footer';
import { useState ,useEffect } from 'react';
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';

const BuildingPhysicsApp = () => {
    const [projectName, setProjectName] = useState("");
    const [projectOwner, setProjectOwner] = useState("");
    const [projectCity, setProjectCity] = useState("");
    const [projectTe, setProjectTe] = useState(0);
    const [projectTi, setProjectTi] = useState(0);
    const [projectA, setProjectA] = useState(0);
    const [projectTransType, setProjectTransType] = useState("");
    const [projectNumberOfLayers, setProjectNumberOfLayers] = useState(0);
    const [projectOrientation, setProjectOrientation] = useState("");

    const [matNumber,setMatNumber] = useState("");
    const [matName, setMatName] = useState("");
    const [matLambda, setMatLambda] = useState(0);
    const [matThickness, setMatThickness] = useState(0);
    const [matR, setMatR] = useState(0);
    

    async function uploadInfo() {
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
            orientation: projectOrientation
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/general-info`,
          requestOptionsProject);
      }

      async function uploadContruction() {
        const matR= matThickness/matLambda;
        var requestOptionsMat = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            number: matNumber,
            name: matName,
            lambda: matLambda,
            thickness: matThickness,
            R: matR
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction/${matNumber}`,
          requestOptionsMat
        );
      }  


  async function Calculate() {
        const response = await fetch(`http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/general-info`)
        const data = await response.json();
        const {numberOfLayers, Te, Ti, A, transType, orientation} = data;
        console.log(numberOfLayers);
        setProjectNumberOfLayers(numberOfLayers);
        setProjectTe(Te);
        setProjectTi(Ti);
        setProjectA(A);
        setProjectTransType(transType);
        setProjectOrientation(orientation);
      

      for (let i = 1; i <= projectNumberOfLayers; i++) {
        const response = await fetch(`http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction/${i}`)
        const data = await response.json();
        const {number, name, lambda, thickness, R} = data;
        setMatNumber(number);
        setMatName(name);
        setMatLambda(lambda);
        setMatThickness(thickness);
        setMatR(R);

      
        };
    
        
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
              setProjectTe(selectedTemperature);
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
              type="number"
              onChange={e => setProjectTi(e.target.value)}
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
              onChange={e => setProjectNumberOfLayers(e.target.value)}
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
              onChange={e => setProjectA(e.target.value)}
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
            <Form.Label>Index (inside to outside)</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="number"
              onChange={e => setMatNumber(e.target.value)}
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
              onChange={e => setMatName(e.target.value)}
              placeholder="rock wool"
            />
            </InputGroup>
        </Col>
        <Col className="mb">
            <Form.Label>Heat Conductivity (lambda)</Form.Label>
            <InputGroup className="mb-2">
            <FormControl 
              id="inlineFormInputGroup" 
              placeholder="0.034" 
              required
              type="number"
              onChange={e => setMatLambda(e.target.value)}
              />
            <InputGroup.Text>W/mK</InputGroup.Text>  
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
              onChange={e => setMatThickness(e.target.value)}
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

      <div className='m-5'>
     <h4 className="mb-3">Calculation</h4>
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
        <div className="d-grid gap-3">
        <Button onClick={Calculate} className="btn-block btn-danger" type="submit">Calculate</Button>
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
