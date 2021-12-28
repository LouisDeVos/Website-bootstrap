import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import BuildingPhysicsApp from './components/pages/BuildingPhysicsApp';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import BuildingPhysicsDB from './components/pages/BuildingPhysicsDB';
import BuildingPhysicsApp1 from './components/pages/BuildingPhysicsApp1';
import BuildingPhysicsApp2 from './components/pages/BuildingPhysicsApp2';
import Project1 from './components/pages/projects/Project1';
import Project2 from './components/pages/projects/Project2';
import Project3 from './components/pages/projects/Project3';
import TESTpage from './components/pages/TESTpage';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/projects' exact element={<Projects/>}/>
        <Route path='/building-physics-app' exact element={<BuildingPhysicsApp/>}/>
        <Route path='/building-physics-app1' exact element={<BuildingPhysicsApp1/>}/>
        <Route path='/building-physics-app2' exact element={<BuildingPhysicsApp2/>}/>
        <Route path='/building-physics-db' exact element={<BuildingPhysicsDB/>}/>
        <Route path='/about-us' exact element={<AboutUs/>}/>
        <Route path='/project1' exact element={<Project1/>}/>
        <Route path='/project2' exact element={<Project2/>}/>
        <Route path='/project3' exact element={<Project3/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/testpage' element={<TESTpage/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
