import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <>
            <div className="vh-100 contact-container d-flex justify-content-center mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h3 className='contact-header'>Get in touch</h3>
                            <div className="contact-information">
                                <h6 className='contact-subheading'>Contact information</h6>
                                <p>
                                    27,Alara Street<br />
                                    Yaba 100012<br />
                                    Lagos State
                                </p>
                                <p>Call Us : <a href='tel: 07067981819' className='phone-number'>07067981819</a> </p>
                                <p>we are open from Monday-Friday
                                    08:00am - 05:00pm</p>
                                <p className='share-on'>Share on </p><div className="social-media">
                                <AiOutlineInstagram/> <RiTwitterXLine/> <FaFacebookF/> <FaLinkedinIn/>
                           </div> </div>
                        </Col>
                        <Col>
                        <div className="form-section">
                            <div className="form-header">
                                <h3>Questions or need assistance?</h3>
                                <h5>Let us know about it!</h5>
                            </div>
                            <div className="contact-form mt-3 ">
                                <form className='d-flex flex-column p-5 justify-content-start align-items-start'>
                                    <div>
                                        <input type='name' placeholder='First Name'/>
                                    </div>
                                    <div>
                                        <input type='email' placeholder='Mail'className='mt-3'/>
                                    </div>
                                    <div>
                                        <textarea placeholder='Message' className='mt-5'/>
                                    </div>
                                    
                                    
                                    
                                   
                                    <button type='button'className='submit-btn mt-4 btn contact-btn'>Submit</button>
                                </form>
                            </div>
                        </div>


                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
