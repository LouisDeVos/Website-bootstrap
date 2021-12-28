import React from 'react';
import Footer from '../Footer';
import { useState  } from 'react';
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import _ from 'lodash';

const BuildingPhysicsAppMat = () => {
    const [projectName, setProjectName] = useState("");

    /*const [matNumber,setMatNumber] = useState(0);*/
    const [mats, setMats] = useState([]);
    const [matName, setMatName] = useState("");
    const [matLambda, setMatLambda] = useState(0);
    const [matThickness, setMatThickness] = useState(0);

    const [matResSum, setMatResSum] = useState(0);
    

    
      
    
      
    
    async function saveRtot() {
        const d= new Date();
        var requestOptionsMat = {
          method: "PUT",
          headers: { "Content-Type": 'application/JSON' },
          body: JSON.stringify({
            Rsum: matResSum,
            updated: d
          }),
        };
    
        await fetch(
            `http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction-info`,
          requestOptionsMat
        );
      } 

      
      const addMat = event => {
        event.preventDefault();
        const matR= matThickness/matLambda;
        setMats([
          ...mats,
          {
            'id': mats.length,
            'name': matName,
            'res': Number(matR.toFixed(3))
          }
        ]);
        setMatResSum(_.sumBy(mats, 'res'));
        setMatName("");
        setMatLambda(0);
        setMatThickness(0);
      }; 
    
    


    return (
        <>
        <div class="container">
            <div class="pt-5 text-center">
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
     <Form>
        <Row className="align-items-center">   
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
        <Button onClick={addMat} className="btn mb-2 btn-danger" type="button">Submit</Button>
        <p><i>Click <u>one</u> extra time after the last material to compute the grand total.</i></p>
        </div>
        </Row>
        <Row>
        <Col>
        <ul>
              {mats.map(item => (
                <li key={item.id}>{item.id+1} | {item.name} | R = {item.res} m²K/W</li>
              ))}
            </ul>
            
        </Col> 
        <Col></Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>  
        <Col><h5 className='text-center'>Thermal Resistivity</h5><h3 className="py-2 border border-success text-center rounded bg-success text-white">R<sub>total</sub> = {matResSum.toFixed(3)} m²K/W</h3></Col>
        <Col></Col> 
        </Row>
        <Row>
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
        <div>
        <Button href="/building-physics-app" className="btn mb-2 btn-primary" type="button">Back</Button>  
        <Button onClick={saveRtot} className="btn mb-2 btn-danger" type="button">Save R<sub>total</sub> to Project</Button>
        <Button href="/building-physics-app2" className="btn mb-2 btn-primary" type="button">Next</Button>
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
