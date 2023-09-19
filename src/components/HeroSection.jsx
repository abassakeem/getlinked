import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import img from "./../assets/world-stars.png"

export default function HeroSection() {
  return (
    <>
    
    <Container>
        <div className="hero-section-container v">
       <div className="hero-row">
         <Row>
           
            <Col sm={6}>
            <div className="left-hero-container">
           
            <div className="left-hero ">
                <h1 className='hero-header'>getlinked Tech</h1>
                <h1 className='hero-header'>Hackathon 1.0</h1>
                <p>Participate in get linked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <a  className='nav-btn btn register-btn'>
            Register
          </a>
            </div>
             </div>
            </Col>
            <Col sm={6}>
            <div className="right-hero">
                <Image src={img} fluid/>
            </div>
            
            </Col>
        </Row>
       </div>
       </div>
    </Container>
     
    </>
  )
}
