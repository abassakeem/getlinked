import React from 'react'
import img from "./../assets/cwok_casual_21 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'
import star from "./../assets/star.png"
import { motion } from "framer-motion";
import satagra from "./../assets/sata gra.png"
import star1 from "./../assets/star-transparent.png"

export default function Faq() {
  return (
    <>
 <div className="faq-section-container section-end vh-m100">
      <Container>
       
          <div className="rules-row">
            <Row>
              <Col sm={6}>
                <div className="left-faq-container">
                  <div className="left-faq mt-5">
                    <div className="left-faq-header section-header">
                    <div
                     initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileinview={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.50,
                    }}
                    className="position-relative ">
                      <Image src={satagra} className='blinking-sata  faq-satagra-star ' fluid />
                      </div>
                      <h2>Frequently Asked <br /> <span className='section-header-span'>Questions</span></h2>
                      <p className='faq-text section-subtext mb-5'>We got answers to the questions that you might want to ask about <span className='faq-subtext'>getlinked Hackathon 1.0</span></p>
                    </div>
                    <motion.div
                   
                    initial={{
                     opacity: 0,
                     y: 25,
                   }}
                   whileInView={{
                     opacity: 1,
                     y: 0,
                   }}
                   transition={{
                     duration: 0.5,
                     delay: 0.50,
                   }} className="left-faq-sub-text section-subtext">
                      <div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >What happens if I need help during the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >What happens if I don't have an idea for a project?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >Can i work ona a project i started before the hackathon?
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        <div className='faq-li d-flex mb-4 justify-content-between'><p >What happens after the hackathon ends
                        </p>
                          <p className='more-button justify-self-end'>+</p>
                        </div>
                        

                      </div>

                    </motion.div>

                  </div>

                </div>


              </Col>


              <Col sm={6}>
              <div className="position-relative ">
                      <Image src={satagra} className='blinking-sata  faq-satagra-star1 ' fluid />
                      </div>
                      <div className="position-relative ">
                      <Image src={satagra} className='blinking-sata  faq-satagra-star2 ' fluid />
                      </div>
                     
                <div className="right-intro">
                  <Image src={img} fluid />
                </div>
 <div className="position-relative ">
                      <Image src={star1} className='blinking-trans-star  faq-star1 ' fluid />
                      </div>
 <div className="position-relative ">
                      <Image src={star} className='blinking-star  faq-star2 ' fluid />
                      </div>
              </Col>

            </Row>
          </div>
     
      </Container>
   </div>
    </>
  )
}
