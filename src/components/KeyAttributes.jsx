import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import star1 from "./../assets/star-transparent.png"
import star from "./../assets/star.png"
import satagra from "./../assets/sata gra.png"
import img from "./../assets/8046554 1.png"
import light from "./../assets/Purple-Lens-Flare-PNGkey-1.png"
import light1 from "./../assets/Purple-Lens-Flare-PNGkey-2.png"
import { motion } from "framer-motion";

export default function KeyAttributes() {
  return (
    <>
      <div className="keyattributes-section-container mt-5 mb-5 section-end vh-100 position-relative">
        <Container>

          <div className="keyattributes-row mt-3">
            <Row>
              


              <Col sm={6} >
              <div className="position-relative ">
                      <Image src={satagra} className='blinking-sata  attributes-satagra-star ' fluid />
                      </div>
                <div className="left-keyattributes">
                  <Image src={img} fluid className='keyattributes-image'/>
                </div>
                <div className="position-relative ">
                      <Image src={star1} className='blinking-trans-star  attributes-transparent-star ' fluid />
                      </div>
                      <div className="position-relative ">
                      <Image src={star} className='blinking-star  attributes-white-star ' fluid />
                      </div>
                     < Image fluid src={light} className='key-light'/>
              </Col>

              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="right-keyattributes-container">
                  <div className="right-keyatrributes">
                    <div className="right-keyattributes-header section-header">
                      <h2>Judging Criteria <br /> <span className='section-header-span'> Key attributes</span></h2>
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
                    }}
                    className="right-keyattributes-sub-text section-subtext">
                      <ul className='m-0 p-0'>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Innovation and creativity</span>: Evaluate the uniqueness and creativity of the
                          solution. Consider whether it addresses a real-world problem in a novel
                          way or introduces innovative features.
                        </p>
                        </li>

                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Functionality</span>:Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Impact and Relevance: </span>: Determine the potential impact of the solution
                          in the real world. Does it address a significant problem, and is it relevant
                          to the target audience? Judges would assess the potential social,
                          economic, or environmental benefits.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Technical Complexity</span>:  Evaluate the technical sophistication of the solution.
                          Judges would consider the complexity of the code, the use of advanced
                          technologies or algorithms, and the scalability of the solution.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered
                          to the rules and guidelines of the hackathon, including deadlines, use of
                          specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                        </li>
                      </ul>
                      <div className="register-btn-container-hero  mb-5">
                        <a className='nav-btn   register-btn-hero key-attributes-btn'>
                          Read More
                        </a></div>

                    </motion.div>

                  </div>

                </div>
                < Image fluid src={light1} className='key-light2'/>

              </Col>

            </Row>
          </div>

        </Container>
      </div>
    </>
  )
}
