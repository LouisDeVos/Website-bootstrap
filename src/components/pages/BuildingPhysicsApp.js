//import React from 'react';
//import Footer from '../Footer';

//const BuildingPhysicsApp = () => {
//    return (
//        <>
//        <div class="container">
//            <div class="py-5 text-center">
//              <img class="mb-4 d-block mx-auto" src="https://www.ugent.be/++theme++ugent/static/images/logo_ugent_nl.svg" alt="UGent Logo" width="80"/>
//            <h2>Building Physics Calculator</h2>
//            <p class="lead">Calculate transmission heat loss of your building (EN 12831).</p>
//            </div>
//        </div>
//
//        <div class="container">
//            <h4 class="mb-3">General Info</h4>
//            <form novalidate/>
//                <div class="row g-3">
//                    <div class="col-sm-6">
//                        <label for="projectName" class="form-label">
//                            Project Name
//                        </label>
//                        <input id="projectName" type="text" class="form-control" placeholder="My fantastic project" required/>
//                        <div class="invalid-feedback">
//                            Valid Project Name is required.
//                        </div>
//                    </div>
//                    <div class="col-sm-6">
//                        <label for="numberOfRooms" class="form-label">
//                            How many rooms are there?
//                        </label>
//                        <input id="numberOfRooms" type="text" class="form-control" placeholder="5" required/>
//                        <div class="invalid-feedback">
//                            Valid number of rooms is required.
//                        </div>
//                    </div>
//                    <div class="col-sm-6">
//                        <label for="ExtTemp" class="form-label">
//                            Outdoor temperature
//                        </label>
//                        <input id="ExtTemp" type="text" class="form-control" placeholder="15 °C" required/>
//                        <div class="invalid-feedback">
//                            Valid temperature is required.
//                        </div>
//                    </div>
//                    <div class="col-sm-6">
//                        <label for="numberOfRooms" class="form-label">
//                            How many rooms are there?
//                        </label>
//                        <input id="numberOfRooms" type="text" class="form-control" placeholder="5" required/>
//                        <div class="invalid-feedback">
//                            Valid number of rooms is required.
//                        </div>
//                    </div>
//                </div>
//        </div>

       


//        <Footer/>
//        </>
//    )
//}

//export default BuildingPhysicsApp;

import {useState} from "react"
import mime from "mime-types"
import {v4} from 'uuid'
import {newEngine} from '@comunica/actor-init-sparql'

function BuildingPhysicsApp() {
  const [amount, setAmount] = useState(1)
  const [cards, setCards] = useState([])
  const [file, setFile] = useState(null)
  const [name, setName] = useState("")
  const [source, setSource] = useState("http://localhost:5000/Louis-De-Vos/profile/card#me")

  async function fetchData(e) {
    const requestOptions = {
      method: "GET"
    }
    const data = await fetch(`https://deckofcardsapi.com/api/deck/ihx57swbij9m/draw/?count=${amount}`, requestOptions)
    console.log(data)
    const body = await data.json()
    console.log(`body`, body)
    setCards(body.cards)
  }
  
  // upload data to solid pod
  async function uploadData() {
    const mimetype = mime.lookup(file.name)
    console.log(`mimetype`, mimetype)
    var requestOptionsPicture = {
      method: "PUT",
      headers: { "Content-Type": mimetype },
      body: file,
    };

    await fetch(
      `http://localhost:5000/Louis-De-Vos/data/${v4()}`,
      requestOptionsPicture
    );
  }

  async function doQuery() {
    const myEngine = newEngine()
    const q = `SELECT * WHERE {?s foaf:name ?o}`
    const sources = []
    const response = await myEngine.query(q, {sources})
    const results = await response.bindings()
    
    //results is an array => you can do forEach or just use the first value (if existing)
    if (results.length > 0) {

    }
}

  return (
    <div>
      <div>
        <h3>QUERY</h3>
      <p>Welcome, {name}</p>
      <input type="text" value={source} onChange={e => setSource(e.target.value)}/>
      <button onClick={doQuery()}>Find my name</button>
      </div>
      <hr/>
<div>
  <h3>UPLOAD FILE</h3>
  <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
      />
      <button onClick={uploadData}>Upload</button>
      <hr/>
</div>
<div>
  <h3>FETCH CARDS API</h3>
  <input value={amount} onChange={e => setAmount(e.target.value)}/>
  <button onClick={fetchData}>Fetch</button>
      <div>
        {cards.map(card => {
          return <img src={card.image}/>
        })}
      </div>
</div>
    </div>
  );
}

export default BuildingPhysicsApp;
