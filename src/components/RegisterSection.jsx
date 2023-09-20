import React from 'react'
import img from "./../assets/3d-graphic-designer-showing-thumbs-up-png 1.png"
import man from "./../assets/small woman.png"
import woman from "./../assets/small man.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function RegisterSection() {
    return (
        <>
            <div className="register-container">
                <Container>
                    <Row>
                        <Col sm={6}>
                           
                            <div className="register-information">
                               <Image src={img} fluid/>
                            </div>
                        </Col>
                        <Col sm={6}>
                        <div className="form-section">
                            <div className="form-header">
                                <h3 className='section header register-header'>Register</h3>
                                
                            </div>
                            <div className="form-subheader d-flex">
                                <h6>be part of this movement</h6>
                                <div className="walking">
                                    <Image
                                     src={woman} className='woman-img' fluid/>
                                    <Image src={man} className='man-img' fluid/>
                                </div>
                                
                            </div>
                            <div className="register-form mt-3">

                                <form>
                                    <Row>

                                  <Col sm={6}>

                                   <input type='text' placeholder='Enter the name of your group'/>
                                  </Col>
                                  <Col sm={6}>
                                   <input type='text' placeholder='Enter your phone number'/>
                                  </Col>
                                  <Col sm={6}>
                                   <input type='email' placeholder='Enter your email address'/>
                                  </Col>
                                  <Col sm={6}>
                                   <input type='text' placeholder='What is your project topic'/>
                                  </Col>
                                  <Col sm={6}>
                                   <input type='select' placeholder='Select your category'/>
                                  </Col>
                                  <Col sm={6}>
                                   <input type='select' placeholder='select'/>
                                  </Col>
                                   
                                    <p className='review-text'>Please review your registration details before submitting</p>
                                    <div className="agree">
                                    <input type='checkbox' className='checkbox'/> I agreed with the event terms and conditions
  and privacy policy</div>
                                    <button type='button'className='submit-btn mt-4 btn '>Submit</button>
                                 </Row> </form>
                            </div>
                        </div>


                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
