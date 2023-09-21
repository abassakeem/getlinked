import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import img from "./../assets/world-stars.png"
import star1 from "./../assets/star-transparent.png"
import star from "./../assets/star.png"
import chain from "./../assets/chain.png"
import explosion from "./../assets/explosion.png"
import bulb from "./../assets/bulb.png"

import line from "./../assets/Vector 4.png"

export default function HeroSection() {
  return (
    <>

      <Container>
        <div className="hero-section-container vh-75 d-flex justify-content-center align-items-center">
          <div className="hero-row ">
            <Row>

              <Col md={6} className='d-flex flex-column justify-content-center'>

                <div className="left-hero-container text-start ">

                  <div className="left-hero d-flex flex-column justify-content-center ">
                    <Image src={star} className='moving-star star hero-white-star' fluid />
                    <div className="position-relative ">
                    <h1 className='hero-header mt-5 '>getlinked Tech</h1><div className="small-bulb position-absolute"><Image src={bulb} className='bulb-img' fluid /></div>
                    <h2 className='hero-header'>Hackathon <span>1.0</span> <Image src={chain} className='chain' fluid />  <Image src={explosion} className='explosion' fluid /></h2>
                    </div>
                    <p className='hero-sub-text'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <div className="register-btn-container-hero mt-5 mb-5">
                      <a className='nav-btn   register-btn-hero '>
                        Register
                      </a></div>
                      <div className="position-relative">
                      <Image src={star1} className='moving-star star hero-transparent-star ' fluid />
                      </div>
                    <div className="timer">
                      <span className="hour">
                        00<span className='small-leter-timer'>H</span>
                      </span>

                      <span className="minute">
                        00<span className='small-leter-timer'>M</span>

                      </span>
                      <span className=" second">00<span className='small-leter-timer'>S</span></span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="ignite-text">
                  <h3>Igniting a Revolution in HR Innovation</h3>
                  <span className="bent-line"><Image src={line} fluid alt="line" /></span>
                </div>
                <div className="position-relative ">
                      <Image src={star1} className='moving-star star hero-man-transparent-star ' fluid />
                      </div>
                <div className="right-hero ">
                  <div className="man-glasses-img">


                    <Image src={img} fluid />
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
