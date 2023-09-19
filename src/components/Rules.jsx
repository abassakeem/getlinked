import React from 'react'
import img from "./../assets/7450159 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Rules() {
  return (
    <>
    
    <Container>
        <div className="rules-section-container ">
       <div className="rules-row">
         <Row>
            <Col sm={6}>
            <div className="left-intro">
                
            </div>
            
            </Col>
           
            
            <Col sm={6}>
            <div className="right-intro">
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
