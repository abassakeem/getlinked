import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import hamburger from "./../assets/hamburger.png"
import { Image } from 'react-bootstrap';


export default function NavbarSection() {
  const handleTimeline = () => {
    const element = document.querySelector(".timeline-container-wrap");
    window.scrollTo({
        top:element?.getBoundingClientRect().top,
        left: 0,
        behavior:"smooth"
    })
}
const handleIntro = () => {
    const element = document.querySelector(".intro-section-container");
    window.scrollTo({
        top:element?.getBoundingClientRect().top,
        left: 0,
        behavior:"smooth"
    })
}
const handleFaq = () => {
    const element = document.querySelector(".faq-section-container");
    window.scrollTo({
        top:element?.getBoundingClientRect().top,
        left: 0,
        behavior:"smooth"
    })
}
  return (
    <>
     {/* <Navbar expand="sm" className=" nav-section ">
      <Container >
        <Navbar.Brand href="#" className='nav-brand'>get<span className='navbrand-span-linked'>linked</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end gap-5">
        <Nav  >
        <Nav.Item>
          <Nav.Link  className='nav-btn timeline-btn'>Timeline</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-btn overview-btn'>Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-btn faq-btn'>FAQs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-btn contact-btn'>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' register-btn-container m-0 m-auto '>
          <a  className='nav-btn  register-btn'>
            Register
          </a>
        </Nav.Item>
      </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar> */}




    {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-section mb-3">
          <Container >
          <Navbar.Brand href="/" className='nav-brand'>get<span className='navbrand-span-linked'>linked</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className=''>
              <Image src={hamburger} fluid className='hamburger'/>
            </Navbar.Toggle>
            <Navbar.Offcanvas
            className="bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton className='text-light' >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1  ">
                <Nav.Item>
          <Nav.Link onClick={handleTimeline}  className='nav-btn timeline-btn'>Timeline</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={handleIntro}>
          <Nav.Link  className='nav-btn overview-btn'>Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={handleFaq}>
          <Nav.Link  className='nav-btn faq-btn'>FAQs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact"  className='nav-btn contact-btn'>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' register-btn-container d-flex align-items-center justift-contnet-center'>
        
            <a href="/register" className='nav-btn register-btn'>Register</a>
          
        </Nav.Item>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


    
    </>
  )
}
