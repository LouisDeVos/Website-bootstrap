import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Navbar,Nav,NavDropdown,Container,Form,FormControl,Button } from 'react-bootstrap'

class BootstrapNavbar extends React.Component{

    render(){
    return (
        <>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="/">META architecture office</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="/projects">Projects</Nav.Link>
    <Nav.Link href="/about-us">About us</Nav.Link>
    <Nav.Link href="/contact">Contact</Nav.Link>
    <NavDropdown title="Apps" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/building-physics-app">
              Building Physics App</NavDropdown.Item>
              <NavDropdown.Item href="/building-physics-db">
              Building Physics Database</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </>
    )
}
}
export default BootstrapNavbar;
