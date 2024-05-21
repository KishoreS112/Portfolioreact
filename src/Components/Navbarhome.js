import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bootimage from './boot.jpg';
import './Navhome.css'

const Navbars = () => {
  return (
     <div className="nav-container">
      <section id="home">
    <Navbar expand="lg" className="bg-black p-4 h-3">
      <Container fluid>
        {/* <img src={bootimage} alt="bootsrtapimage" width={80} className='p-md-3 ' /> */}
        <Navbar.Brand href="#home" className='fs-5 fw-bolder custbrand'>Kishore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-ico" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto mr-2 d-md-flex justify-content-center align-items-center" id='nav-container'>
            <Nav.Link 
              href="#home"  
              className="text-white text-center text-lg-left me-md-3 links " id="home">
              Home
            </Nav.Link>
            <Nav.Link 
              href="#aboutus" 
              className="text-white text-center text-lg-left me-md-3 links"
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className="text-white text-center text-lg-left me-md-3 links"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#contactus"
              className="text-white text-center text-lg-left me-md-3 links"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    </section>
    </div>
  );
};

export default Navbars;
