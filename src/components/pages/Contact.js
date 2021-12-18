import React from 'react';
import Footer from '../Footer';
import {useState} from "react"
import mime from "mime-types"
import {v4} from 'uuid'
import {newEngine} from '@comunica/actor-init-sparql'

const Contact = () => {
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

export default Contact;
