import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaRegCheckCircle } from "react-icons/fa"
import { FaCheckCircle } from "react-icons/fa"
import security from "./../assets/Vector.png"
import padlock from "./../assets/08 1.png"
export default function Privacy() {
    return (
        <>
            <div className="privacy-section vh-100 d-flex justify-content-center align-items-center">
                <Container>
                    <Row className='gap-5'>
                        <Col>
                            <div className="left-privacy mt-5 d-flex justify-content-center align-items-center">
                                <div className="privact-header section-header mt-5">
                                    <h2 className='mb-4'>Privacy Policy and <span className='section-header-span'>Terms</span></h2>
                                    <p className='mb-4'><small>Last updated on September 12, 2023</small></p>
                                    <p className='mb-4'>Below are our privacy & policy, which outline a lot of goodies.
                                        it’s our aim to always take of our participant</p>
                                </div>
                            </div>

                            <div className="privacy-and-policy mt-5">
                                <div className="privacy-and-policy-inner">


                                    <p className='privacy-text'>At getlinked tech Hackathon 1.0, we value your privacy
                                        and are committed to protecting your personal information.
                                        This Privacy Policy outlines how we collect, use, disclose,
                                        and safeguard your data when you participate in our tech
                                        hackathon event. By participating in our event, you consent
                                        to the practices described in this policy.</p>
                                    <h6 className='purple clash mt-3'>Liscensing Policy</h6>
                                    <p className='mt-2 standard-liscence'>Here are terms of our Standard Liscense</p>
                                    <div className='rule-1 mont d-flex'><div className="check"> <FaCheckCircle className='check-button '/> </div><span>The Standard License grants you a non-exclusive right to
                                        navigate and register for our event</span></div>
                                    <div className='mt-2 rule-2 mont d-flex '><div className="check"> <FaCheckCircle className='check-button '/> </div> You are licensed to use the item available at any free source
                                        sites, for your project developement</div>
                                    <div className="register-btn-container-hero text-center pt-4">
                                        <a className='nav-btn   register-btn-hero '>
                                            Learn more
                                        </a></div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="image-security-container position-relative">
                                <Image src={security} fluid alt="security" className='security' />
                                <Image src={padlock} className='position-absolute man-padlock ' fluid alt="man-on-padlock" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
