import React from 'react'
import img from "./../assets/the big idea 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Introduction() {
  return (
    <>
    
    <Container>
        <div className="intro-section-container v">
       <div className="intro-row">
         <Row>
           
            
            <Col sm={6}>
            <div className="left-intro">
                <Image src={img} fluid/>
            </div>
            
            </Col>
            <Col sm={6}>
            <div className="right-intro">
                
            </div>
            
            </Col>
        </Row>
       </div>
       </div>
    </Container>
     
    </>
  )
}
