import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import img from "./../assets/8046554 1.png"

export default function KeyAttributes() {
  return (
    <>
    
    <Container>
        <div className="keyattributes-section-container v">
       <div className="keyattributes-row">
         <Row>
            
            
            <Col sm={6}>
            <div className="left-keyattributes">
                <Image src={img} fluid/>
            </div>
            
            </Col>
           
            <Col sm={6}>
            <div className="right-keyattributes-container">
           
            <div className="right-keyattributes ">
              
         
            </div>
             </div>
            </Col>
            
        </Row>
       </div>
       </div>
    </Container>
     
    </>
  )
}
