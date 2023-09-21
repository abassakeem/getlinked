import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
export default function Footer() {
    return (
        <>
            <div className="footer-container d-flex ">
                <Container >
                    <Row className="d-flex justify-content-center align-items-center ">
                        <Col sm={4} className='d-dlex position-relative '>
                            <div className="left-section d-flex flex-column mb-5 flex-grow-1 justify-content-center ">
                                <h3 className='section-header'>get<span className='purple'>linked</span></h3>
                                <p className='footer-text'>Getlinked Tech Hackathon is a technology innovation program
                                    established by a group of organizations with the aim of showcasing
                                    young and talented individuals in the field of technology</p>
                                <p className='terms-of-use position-absolute'>Terms of Use <span className='purple'>|</span> Privacy Policy</p>
                            </div>
                        </Col>
                        <Col sm={4} className='d-flex position-relative justify-content-center align-items-center'>
                            <div className="middle-section  d-flex flex-column">
                                <h6 className='purple mont text-start'>Useful Links</h6>
                                <div className="timeline-link mb-3">


                                    <a src="text-start" href="">Overview</a>  </div>
                                <div className="timeline-link mb-3">


                                    <a src="text-start" href="">Timeline</a>  </div>
                                <div className="faq-link mb-3">


                                    <a href="">FAQs</a>
                                </div>
                                <div className="reister-link mb-3">
                                    <a className="">Register</a>
                                </div>

                                <div className="social-media position-absolute">
                                    <span className='purple mont '>follow us</span> <AiOutlineInstagram /> <RiTwitterXLine /> <FaFacebookF /> <FaLinkedinIn />
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className='d-flex flex-column justify-content-center align-items-center'>
                            <div className="right-section mb-5">
                                <h6 className='purple mont '>Contact Us</h6>
                                <div className="phone-number">
                                    < BiPhoneCall /> <a className='mont phone-number-number'> +234 679 81819</a>
                                </div>
                                <div className="address d-flex ">
                                    <GoLocation />
                                    <address className='mont address-text'>
                                        27,Alara Street<br />
                                        Yaba 100012<br />
                                        Lagos State
                                    </address>

                                </div>
                            </div>

                        </Col>
                        <Col sm={12} className='text-center mt-5'>
                            <p className='copyright'>  all rights reserved. <AiOutlineCopyright /> getlinked Ltd </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
