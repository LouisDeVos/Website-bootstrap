import React from 'react';
import Footer from '../Footer';
import { useState } from 'react';

const BuildingPhysicsApp = () => {
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
        <div class="container">
            <div class="py-5 text-center">
              <img class="mb-4 d-block mx-auto" 
              src="http://localhost:5000/Louis-De-Vos/data/images/trisco.png" 
              alt="Trisco Logo" 
              width="100"/>
            <h2>Building Physics App</h2>
            <p class="lead">Calculate transmission heat loss of a building part (EN 12831).</p>
            </div>
        </div>

        <div class="container">
            <h4 class="mb-3">General Info</h4>
            <form novalidate onSubmit={handleSubmit}>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label class="form-label">
                            Project Name
                        </label>
                        <input 
                        name="projectName" 
                        type="text" 
                        class="form-control"
                        value={inputs.projectName || ""}
                        onChange={handleChange} 
                        placeholder="My fantastic project" 
                        required/>
                        <div class="invalid-feedback">
                            Valid Project Name is required.
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label">
                            Room Temperature (in degrees Celsius)
                        </label>
                        <input
                        name="Ti"
                        type="number"
                        class="form-control"
                        value={inputs.Ti || ""}
                        onChange={handleChange}
                        placeholder="20 °C"
                        required/>
                        <div class="invalid-feedback">
                            Valid indoor temperature is required.
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label">
                            Number of material layers
                        </label>
                        <input
                        name="numberOfLayers"
                        type="number"
                        class="form-control"
                        value={inputs.numberOfLayers || ""}
                        onChange={handleChange}
                        placeholder="5"
                        required/>
                        <div class="invalid-feedback">
                            Valid number of material layers is required.
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label">
                            In which Belgian city is the project located?
                        </label>
                        <select
                            value={inputs.Te || ""}
                            type="number"
                            onChange={handleChange}
                            class="form-control"
                            placeholder="Ghent" 
                            required>
                            <option value={-8}>Aalst</option>
                            <option value={-10}>Aubel</option>
                            <option value={-8}>Gent</option>
                        </select>
                        <div class="invalid-feedback">
                            Valid city is required.
                        </div>
                    </div>
                    <input type="submit"/>
                </div>
            </form>
            <h3> Your project named "{inputs.projectName}" with an indoor temperature of {inputs.Ti}°C is located in a city with an outdoor temperature of {inputs.Te}.</h3>    
        </div>

       


        <Footer/>
       </>
    )
}

export default BuildingPhysicsApp;
