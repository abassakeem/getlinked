import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarSection() {
  return (
    <>
     <Navbar expand="sm" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#" className='nav-brand'>get<span className='navbrand-span-linked'>linked</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav  >
        <Nav.Item>
          <Nav.Link  className='nav-btn timeline-btn'>Timeline</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-btn overview-btn'>Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-btn faq-btn'>FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-btn btn register-btn'>
            Register
          </Nav.Link>
        </Nav.Item>
      </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>






    
    </>
  )
}
