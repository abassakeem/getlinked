import React from 'react'
import img from "./../assets/7450159 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Rules() {
  return (
    <>
  <div className="rules-section-container vh-100">
      <Container>
      
          <div className="rules-row">
            <Row>
              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="left-rules-container">
                  <div className="left-rules">
                    <div className="left-rules-header section-header">
                      <h2>Rules and  <br /> <span className='section-header-span'> Guildelines</span></h2>
                    </div>
                    <div className="left-rules-sub-text section-subtext">
                      <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>

                    </div>

                  </div>

                </div>

              </Col>


              <Col sm={6}>
                <div className="right-intro">
                  <Image src={img} fluid />
                </div>

              </Col>

            </Row>
          </div>
      
      </Container>
  </div>
    </>
  )
}
