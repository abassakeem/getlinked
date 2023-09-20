import React from 'react'
import img from "./../assets/cwok_casual_21 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Faq() {
  return (
    <>
 <div className="faq-section-container vh-100">
      <Container>
       
          <div className="rules-row">
            <Row>
              <Col sm={6}>
                <div className="left-faq-container">
                  <div className="left-faq">
                    <div className="left-faq-header section-header">
                      <h2>Frequently Asked <br /> <span className='section-header-span'>Questions</span></h2>
                      <p className='faq-text section-subtext mb-5'>We got answers to the questions that you might want to ask about <span className='faq-subtext'>getlinked Hackathon 1.0</span></p>
                    </div>
                    <div className="left-faq-sub-text section-subtext">
                      <div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        

                      </div>

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
