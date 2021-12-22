import React from 'react';
import Footer from '../Footer';
import {useState, useRef} from "react"
import mime from "mime-types"
import {v1,v4} from 'uuid'
import {newEngine} from '@comunica/actor-init-sparql'

const TESTpage = () => {
    const [file, setFile] = useState(null);
    const [reqMat, setReqMat] = useState(null);
    const [source, setSource] = useState("http://localhost:5000/Louis-De-Vos/profile/card#me");
    //const [lambdaDisplay] = useRef("");
    //const [projectNameDisplay] = useRef("")
  
  
    async function fetchLambda() {
      const response = await fetch(`http://localhost:5000/Louis-De-Vos/data/materials/${reqMat}`)
      const data = await response.json();
      const {lambda, name} = data;
      console.log(lambda, name);
      document.getElementById('name').textContent = name
      document.getElementById('lambda').textContent = lambda
    }

    async function fetchProject() {
      const response = await fetch(`http://localhost:5000/Louis-De-Vos/data/materials/${reqMat}`)
      const data = await response.json();
      const {projectName} = data;
      console.log(projectName);
      document.getElementById('projectName').textContent = projectName
    }

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
  
    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName
        }
      ]);
      setItemName("");
    };
    
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
   <><div>
        <h3>UPLOAD FILE</h3>
        <input
          type="file"
          onChange={e => setFile(e.target.files[0])} />
        <button onClick={uploadData}>Upload</button>
        <hr />
      </div><div>
          <h3>MATERIAL LAMBDA INFORMATION</h3>
          <input value={reqMat} onChange={e => setReqMat(e.target.value)} />
          <button onClick={fetchLambda}>Fetch</button>
          <p id="name"></p>
          <p id="lambda"></p>
        </div><div>
          <h3>MATERIAL PROJECT INFORMATION</h3>
          <input value={reqMat} onChange={e => setReqMat(e.target.value)} />
          <button onClick={fetchProject}>Fetch</button>
          <p id="projectName"></p>
        </div>
        
       
      
          
         
            
              <div>
              
            <form onSubmit={addItem}>
              <label>
                <input
                  name="item"
                  type="text"
                  value={itemName}
                  onChange={e => setItemName(e.target.value)}
                />
              </label>
            </form>
            <ul>
              {items.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          
              </div></>
  );
}

export default TESTpage;
