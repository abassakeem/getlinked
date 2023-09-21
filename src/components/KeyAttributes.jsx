import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import img from "./../assets/8046554 1.png"

export default function KeyAttributes() {
  return (
    <>
 <div className="keyattributes-section-container vh-100">
      <Container>
       
          <div className="keyattributes-row">
            <Row>


              <Col sm={6}>
                <div className="left-keyattributes">
                  <Image src={img} fluid />
                </div>

              </Col>

              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="right-keyattributes-container">
                  <div className="right-keyatrributes">
                    <div className="right-keyattributes-header section-header">
                      <h2>Judging Criteria <br /> <span className='section-header-span'> Key attributes</span></h2>
                    </div>
                    <div className="right-keyattributes-sub-text section-subtext">
                      <ul className='m-0 p-0'>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Innovation and creativity</span>: Evaluate the uniqueness and creativity of the
                          solution. Consider whether it addresses a real-world problem in a novel
                          way or introduces innovative features.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Innovation and creativity</span>: Evaluate the uniqueness and creativity of the
                          solution. Consider whether it addresses a real-world problem in a novel
                          way or introduces innovative features.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Innovation and creativity</span>: Evaluate the uniqueness and creativity of the
                          solution. Consider whether it addresses a real-world problem in a novel
                          way or introduces innovative features.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Innovation and creativity</span>: Evaluate the uniqueness and creativity of the
                          solution. Consider whether it addresses a real-world problem in a novel
                          way or introduces innovative features.
                        </p>
                        </li>
                        <li><p className='key-attributes-li'><span className='list-attributes-header'>Innovation and creativity</span>: Evaluate the uniqueness and creativity of the
                          solution. Consider whether it addresses a real-world problem in a novel
                          way or introduces innovative features.
                        </p>
                        </li>
                      </ul>
                      <div className="register-btn-container-hero mt-5 mb-5">
                <a  className='nav-btn   register-btn-hero '>
            Read More
          </a></div>

                    </div>

                  </div>

                </div>

              </Col>

            </Row>
          </div>
       
      </Container>
 </div>
    </>
  )
}
