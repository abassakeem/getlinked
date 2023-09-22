import React from 'react'
import img from "./../assets/9486889 1.png"
import gold from "./../assets/gold_medal 1.png"
import silver from "./../assets/silver_medal 1.png"
import bronze from "./../assets/bronze_medal 1.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Prizes() {
  return (
    <>

      <Container>
        <div className="prizes-section-container vh-100 d-flex justify-content-center align-items-center">
          <div className="prizes-row">
            <Row>


              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="left-prizes">
                  <div className="throphy">



                    <Image src={img} fluid />
                    
                  </div>
                </div>

              </Col>
              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <div className="right-prizes-container">
                  <div className="right-prizes">
                    <div className="right-prizes-header section-header">
                      <h2>Prizes and <br /> <span className='section-header-span'> Rewards</span></h2>
                    </div>
                    <div className="right-prizes-sub-text section-subtext">
                      <p>Highlight of the prizes or rewards for winners and for participants</p>

                    </div>

                    <div className="awards d-flex text-center justiify-content-center align-items-center">
                        <div className="silver">
                        <Image src={silver} fluid />
                        <div className="text">
                            <h6 className='award-position award-position-2'>2nd</h6>
                            <p className='award-title award-title-2'>Runner</p>
                            <p className='award-amount award-amount-2'>N300,000</p>
                        </div>
                        </div>
                        <div className="gold">
                        <Image src={gold} fluid />
                        <div className="text">
                            <h6 className='award-position award-position-1'>1st</h6>
                            <p className='award-title award-title-1' >Runner</p>
                            <p className='award-amount award-amount-1'>N300,000</p>
                        </div>
                        </div>
                        <div className="bronze">
                        <Image src={bronze} fluid />
                        <div className="text">
                            <h6 className='award-position award-position-3'>3rd</h6>
                            <p className='award-title award-title-3'>Runner</p>
                            <p className='award-amount award-amount-3'>N300,000</p>
                        </div>
                        </div>
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
