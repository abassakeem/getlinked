import React from 'react'
import img from "./../assets/the big idea 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Introduction() {
  return (
    <>

      <Container>
        <div className="intro-section-container vh-50 d-flex justify-content-center align-items-center">
          <div className="intro-row">
            <Row>


              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="left-intro">
                  <div className="bulb">



                    <Image src={img} fluid />
                    <span className='bulb-text'>The Big Idea!</span>
                  </div>
                </div>

              </Col>
              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="right-intro-container">
                  <div className="right-intro">
                    <div className="right-intro-header section-header">
                      <h2>Intoduction to getlinked <br /> <span className='section-header-span'> techHackathon 1.0</span></h2>
                    </div>
                    <div className="right-intro-sub-text section-subtext">
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
            </Row>
          </div>
        </div>
      </Container>

    </>
  )
}
