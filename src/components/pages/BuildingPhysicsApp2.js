import React from 'react';
import Footer from '../Footer';
import { useState } from 'react';
import { Form, Col, Row, Button, InputGroup, } from 'react-bootstrap';

const BuildingPhysicsAppCalc = () => {
    const [projectName, setProjectName] = useState(null);

    //const [Te, setTe] = useState(0);
    //const [Ti, setTi] = useState(0);
    //const [A, setA] = useState(0);
    //const [orientation, setOrientation] = useState(""); 

    const [matResSum, setMatResSum] = useState(0);

    const [U, setU] = useState(0);
    const [heat, setHeat] = useState(0);
    

  async function Start() {
        const response1 = await fetch(`http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/general-info`)
        const data1 = await response1.json();
        const {A, Ti, Te, orientation} = data1;
        console.log(A, Ti, Te, orientation);
        //setA(A);
        //setTi(Ti);
        //setTe(Te);
        //setOrientation(orientation);
        const response2 = await fetch(`http://localhost:5000/Louis-De-Vos/data/projects/${projectName}/construction-info`)
        const data2 = await response2.json();
        const {Rsum} = data2;
        console.log(Rsum);
        setMatResSum(Rsum);
        if (orientation==="H") {
          setU(Math.pow((0.04+matResSum+0.13),-1));
        } else if(orientation==="VUp"){
          setU(Math.pow((0.04+matResSum+0.10),-1));
        } else if(orientation==="VDown"){
          setU(Math.pow((0.04+matResSum+0.17),-1));
        }
        setHeat((A*U)*(Ti-Te));
        console.log(heat);
        }  
  
        

  /*function Calculate() {
        if (orientation==="H") {
          setU(Math.pow((0.04+matResSum+0.13),-1));
        } else if(orientation==="VUp"){
          setU(Math.pow((0.04+matResSum+0.10),-1));
        } else if(orientation==="VDown"){
          setU(Math.pow((0.04+matResSum+0.17),-1));
        }
        setHeat((A*U)*(Ti-Te));
        console.log(heat);
  }*/
 
    
      
    
        
      
    


    return (
        <>
        <div className="container">
            <div className="pt-5 text-center">
              <img className="mb-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/buildingPhysics/trisco.png" 
              alt="Trisco DB Logo" 
              width="105"/>
            <h2>Building Physics App</h2>
            <p className="lead">Calculate the Transmission Heat Loss through a Building Part (EN 12831)</p>
            </div>
        </div>
     
       <div className='container'>
      <div className='m-5'>
     <h4 className="mb-3">Calculation</h4>
     <Form noValidate>
        <Row className="align-items-center">
        <Col className="mb">
            <Form.Label>Project Name</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
              required
              value={projectName}
              type="text"
              onChange={e => setProjectName(e.target.value)}
              placeholder="My fantastic project"
            />
            </InputGroup>
            <p id="number"></p>    
        </Col>
        <div>
        <Button href="/building-physics-app1" className="btn mb-2 btn-primary" type="button">Back</Button>  
        <Button onClick={Start} className="btn mb-2 btn-danger" type="button">Calculate</Button>
        <p><i>Please keep clicking untill the values stop updating.</i></p>
        </div>
        </Row>
        <Row>
        <Col>
        <h3 className="py-3">U = {U.toFixed(3)} W/m²K</h3>
        </Col>
        <Col>
        </Col>
        <Col>
        <div className='border text-center'><h3 className="py-3"><span>&#934;</span><sub>total</sub> = {heat.toFixed(3)} W</h3></div>
        </Col>
        </Row> 
      </Form>
      
      </div>
      </div>

       


        <Footer/>
       </>
    )
}

export default BuildingPhysicsAppCalc;
