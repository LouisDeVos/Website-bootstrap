import React from 'react';
import Footer from '../Footer';
import { useState ,useRef } from 'react';
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';

const BuildingPhysicsAppMat = () => {
    const [projectName, setProjectName] = useState("");

    const [matNumber,setMatNumber] = useState(0);
    const [matName, setMatName] = useState("");
    const [matLambda, setMatLambda] = useState(0);
    const [matThickness, setMatThickness] = useState(0);

    const [matR, setMatR] = useState(0);
    

   
    async function uploadContruction() {
        const matR= matThickness/matLambda;
        const d= new Date();
        var requestOptionsMat = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            number: matNumber,
            name: matName,
            lambda: matLambda,
            thickness: matThickness,
            R: matR,
            updated: d
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction/${matNumber}`,
          requestOptionsMat
        );
      } 
      
      /*useEffect((event) => {
        event.preventDefault();
        setMatItems([
          ...matItems,
          {
            id: matItems.length,
            number: matNumber,
            name: matName
          }
        ]);
        setMatNumber(prevMatNumber => Number(prevMatNumber) + 1);
        setMatName("");
      },matNumber); */


  /*async function Calculate() {
        const response = await fetch(`http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/general-info`)
        const data = await response.json();
        const {numberOfLayers, Te, Ti, A, transType, orientation} = data;
        console.log(numberOfLayers);
        setProjectNumberOfLayers(numberOfLayers);
        setProjectTe(Te);
        setProjectTi(Ti);
        setProjectA(A);
        setProjectTransType(transType);
        setProjectOrientation(orientation);*/
      

      /*for (let i = 1; i <= projectNumberOfLayers; i++) {
        const response = await fetch(`http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction/${i}`)
        const data = await response.json();
        const {number, name, lambda, thickness, R} = data;
        setMatNumber(number);
        setMatName(name);
        setMatLambda(lambda);
        setMatThickness(thickness);
        setMatR(R);

      
        };*/
    
        
      
    


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
     <h4 className="mb-3">Construction Properties</h4>
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
            <Form.Label>Index (inside to outside)</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              type="number"
              value={matNumber}
              onChange={e => setMatNumber(Number(e.target.value))}
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
              value={matName}
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
              step=".001"
              value={matLambda}
              onChange={e => setMatLambda(Number(e.target.value))}
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
              step=".001"
              value={matThickness}
              type="number"
              onChange={e => setMatThickness(Number(e.target.value))}
              />
            <InputGroup.Text>m</InputGroup.Text>  
            </InputGroup>
        </Col>
        <div>
        <Button onClick={uploadContruction} className="btn mb-2 btn-danger" type="submit">Submit</Button>
        <Button href="/building-physics-app1" className="btn mb-2 btn-primary" type="button">Next</Button>
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
        <Button /*onClick={}*/ className="btn-block btn-danger" type="submit">Calculate</Button>
        </div>
        </Row> 
      </Form>
      </div>
      </div>

       


        <Footer/>
       </>
    )
}

export default BuildingPhysicsAppMat;
