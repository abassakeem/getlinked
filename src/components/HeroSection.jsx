import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import img from "./../assets/world-stars.png"
import star1 from "./../assets/star-transparent.png"
import star from "./../assets/star.png"
import chain from "./../assets/chain.png"
import explosion from "./../assets/explosion.png"
import bulb from "./../assets/bulb.png"
import light from "./../assets/Purple-Lens-Flare-PNGhero-1.png"
import light2 from "./../assets/Purple-Lens-Flare-PNGhero-2.png"

import line from "./../assets/Vector 4.png"

export default function HeroSection() {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting]= useState(false);
  const toRotate = ["gniting a Revolution in HR Innovation", "gniting a Revolution in HR Innovation"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(275 - Math.random() *100);
  const period = 50;

  useEffect(()=> {
      let ticker = setInterval(() => {
          tick();
      }, delta)
      return () => { clearInterval(ticker)};
  }, [text])
  const tick = () => {
      let i = loopNumber % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length + 1);

      setText(updatedText);

      if (isDeleting){
          setDelta(prevDelta => prevDelta /2)
      }
      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);

      }else if(isDeleting && updatedText === ''){
          setIsDeleting(false);
          setLoopNumber(loopNumber + 1);
          setDelta(250)
      }
  }
  return (
    <>

      <Container>
        <div className="hero-section-container vh-75 d-flex justify-content-center align-items-center">
          <div className="hero-row ">
            <div className="d-flex justify-content-end align-items-end ignite-container">
            <div className="ignite-text">
              
                  <h3 className='ignite-text-h3'>I{text}</h3>
                  <div className="">
                  <span className="bent-line">
                    <Image src={line} fluid alt="line" /></span></div>
                </div>
                </div>
            <Row>
            
              <Col md={6} className='d-flex flex-column justify-content-center'>

                <div className="left-hero-container text-start ">

                  <div className="left-hero d-flex flex-column justify-content-center ">
                    <Image src={star} className='blinking-star star hero-white-star' fluid />
                    <div className="position-relative section-header-container">
                      <Image fluid src={light} className='hero-light d-none d-md-block'/>
                    <h1 className='hero-header mt-5 '>getlinked Tech</h1><div className="small-bulb position-absolute"><Image src={bulb} className='bulb-img' fluid /></div>
                    <h2 className='hero-header'>Hackathon <span>1.0</span> <Image src={chain} className='chain' fluid />  <Image src={explosion} className='explosion' fluid /></h2>
                    </div>
                    <p className='hero-sub-text'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <div className="register-btn-container-hero mt-5 mb-5">
                      <a className='nav-btn   register-btn-hero '>
                        Register
                      </a></div>
                      <div className="position-relative">
                      <Image src={star1} className='blinking-trans-star star hero-transparent-star ' fluid />
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
                
                <div className="position-relative ">
                      <Image src={star1} className='blinking-trans-star star hero-man-transparent-star ' fluid />
                      </div>
                <div className="right-hero ">
                  <div className="man-glasses-img">

<Image src={star} className='blinking-star star hero-white-star' fluid />
<Image fluid src={light2} className='hero-light2 d-none d-md-block'/>

                    <Image src={img} className='rotate' fluid />
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
