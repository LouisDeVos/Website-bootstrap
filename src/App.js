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

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/projects' exact element={<Projects/>}/>
        <Route path='/building-physics-app' exact element={<BuildingPhysicsApp/>}/>
        <Route path='/about-us' exact element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
