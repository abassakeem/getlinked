import React from 'react'
import img from "./../assets/cwok_casual_21 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Faq() {
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
