import React from 'react';
import Footer from '../Footer';

const BuildingPhysicsApp = () => {
    return (
        <>
        <div class="container">
            <div class="py-5 text-center">
              <img class="mb-4 d-block mx-auto" src="https://www.ugent.be/++theme++ugent/static/images/logo_ugent_nl.svg" alt="UGent Logo" width="80"/>
            <h2>Building Physics Calculator</h2>
            <p class="lead">Calculate transmission heat loss of your building (EN 12831).</p>
            </div>
        </div>

        <div class="container">
            <h4 class="mb-3">General Info</h4>
            <form novalidate/>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="projectName" class="form-label">
                            Project Name
                        </label>
                        <input id="projectName" type="text" class="form-control" placeholder="My fantastic project" required/>
                        <div class="invalid-feedback">
                            Valid Project Name is required.
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label for="numberOfRooms" class="form-label">
                            How many rooms are there?
                        </label>
                        <input id="numberOfRooms" type="text" class="form-control" placeholder="5" required/>
                        <div class="invalid-feedback">
                            Valid number of rooms is required.
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label for="ExtTemp" class="form-label">
                            Outdoor temperature
                        </label>
                        <input id="ExtTemp" type="text" class="form-control" placeholder="15 °C" required/>
                        <div class="invalid-feedback">
                            Valid temperature is required.
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label for="numberOfRooms" class="form-label">
                            How many rooms are there?
                        </label>
                        <input id="numberOfRooms" type="text" class="form-control" placeholder="5" required/>
                        <div class="invalid-feedback">
                            Valid number of rooms is required.
                        </div>
                    </div>
                </div>
        </div>

       


        <Footer/>
       </>
    )
}

export default BuildingPhysicsApp;
