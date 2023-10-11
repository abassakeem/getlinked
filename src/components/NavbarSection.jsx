import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburger from "./../assets/hamburger.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarSection() {
  
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleToggleOffcanvas = () => {
    if (window.innerWidth < 992) {
      setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    }
  };

  const handleTimeline = () => {
    const element = document.querySelector(".timeline-container-wrap");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
    handleCloseOffcanvas(); // Close the Offcanvas after clicking the link
  };

  const handleIntro = () => {
    const element = document.querySelector(".intro-section-container");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
    handleCloseOffcanvas(); // Close the Offcanvas after clicking the link
  };

  const handleFaq = () => {
    const element = document.querySelector(".faq-section-container");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
    handleCloseOffcanvas(); // Close the Offcanvas after clicking the link
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-section mb-3">
          <Container fluid className="px-5">
            <Navbar.Brand className="nav-brand p-0 brand">
              <Link to="/" className="clash mont-white">
                get<span className="navbrand-span-linked">linked</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleToggleOffcanvas} // Toggle Offcanvas when the toggle button is clicked
            >
              {" "}
              <Image src={hamburger} fluid className="hamburger" />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleCloseOffcanvas} // Close Offcanvas when the close button is clicked
              className="bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="text-light">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Item>
                    <Nav.Link
                      onClick={handleTimeline}
                      className="nav-btn overview-btn"
                    >
                      <Link to="/" className="mont-white">
                        Timeline
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={handleIntro}>
                    <Nav.Link className="nav-btn overview-btn">
                      <Link to="/" className="mont-white">
                        Overview
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={handleFaq}>
                    <Nav.Link className="nav-btn faq-btn">
                      <Link to="/" className="mont-white">
                        FAQs
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={handleToggleOffcanvas}>
                    <Nav.Link className="nav-btn contact-btn">
                      <Link to="/contact" className="mont-white">
                        Contact
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={handleToggleOffcanvas}  className=" register-btn-container d-flex align-items-center justift-contnet-center">
                    <Link
                      to="/register"
                      className="nav-btn register-btn nav-register-btn"
                    >
                      Register
                    </Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
