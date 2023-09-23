import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaRegCheckCircle } from "react-icons/fa"
import { FaCheckCircle } from "react-icons/fa"
import security from "./../assets/Vector.png"
import padlock from "./../assets/08 1.png"
import star from "./../assets/star.png"
import satagra from "./../assets/sata gra.png"
import star1 from "./../assets/star-transparent.png"
import light from "./../assets/Purple-Lens-Flare-PNGprivacy.png"
export default function Privacy() {
    return (
        <>
            <div className="privacy-section position-relative  pb-5 d-flex justify-content-center align-items-center mb-5">
                <Container>
                    <Row className='gap-5'>
                        <Col>
                            <div className="left-privacy mt-3 d-flex justify-content-center align-items-center">

                                <div className="privact-header section-header mt-5">

                                    <h2 className=''>Privacy Policy and<br /> <span className='section-header-span'>Terms</span></h2>
                                    <p className=''><small>Last updated on September 12, 2023</small></p>
                                    <div className="position-relative privacy-star-2">
                                    <Image src={satagra} className='blinking-trans-star  privacy-satagra-star d-none d-md-block' fluid />
                                </div>
                                    <p className='mont-14 privacy-below'>Below are our privacy & policy, which outline a lot of goodies.
                                        it’s our aim to always take of our participant</p>
                                </div>      
                                  <div className="position-relative privacy-star-1">
                                    <Image src={star1} className='blinking-trans-star  privacy-transparent-star ' fluid />
                                </div>
                            </div>

                            <div className="privacy-and-policy mt-3">
                                <div className="privacy-and-policy-inner">


                                    <p className='privacy-text '>At getlinked tech Hackathon 1.0, we value your privacy
                                        and are committed to protecting your personal information.
                                        This Privacy Policy outlines how we collect, use, disclose,
                                        and safeguard your data when you participate in our tech
                                        hackathon event. By participating in our event, you consent
                                        to the practices described in this policy.</p>
                                    <h6 className='purple clash mt-3'>Liscensing Policy</h6>
                                    <p className='mt-2 standard-liscence'>Here are terms of our Standard Liscense</p>
                                    <div className='rule-1 mont mont-14 d-flex'><div className="check"> <FaCheckCircle className='check-button ' /> </div><span>The Standard License grants you a non-exclusive right to
                                        navigate and register for our event</span></div>
                                    <div className='mt-2 rule-2 mont mont-14 d-flex '><div className="check"> <FaCheckCircle className='check-button ' /> </div> You are licensed to use the item available at any free source
                                        sites, for your project developement</div>
                                    <div className="register-btn-container-hero text-center pt-4">
                                        <a className='nav-btn   register-btn-hero privacy-button '>
                                            Read more
                                        </a></div>
                                </div>
                                <div className="position-relative privacy-star-3">
                                    <Image src={satagra} className='blinking-trans-star  privacy-sata-star ' fluid />
                                </div>
                            </div>
                            < Image fluid src={light} className='privacy-light'/>
                        </Col>
                        <Col>
                            <div className="image-security-container position-relative">
                            <div className="position-relative privacy-star-8">
                                    <Image src={satagra} className='blinking-star  privacy-satagra-3 ' fluid />
                                </div>
                                <div className="position-relative privacy-star-5">
                                    <Image src={star} className='blinking-star  privacy-star-star4 ' fluid />
                                </div>
                                <Image src={security} fluid alt="security" className='security' />
                                <Image src={padlock} className='position-absolute man-padlock ' fluid alt="man-on-padlock" />
                                <div className="position-relative privacy-star-9">
                                    <Image src={satagra} className='blinking-trans-star  privacy-sata-star9 ' fluid />
                                </div>
                                <div className="position-relative privacy-star-7">
                                    <Image src={star} className='blinking-trans-star  privacy-sata-star ' fluid />
                                </div>
                                <div className="position-relative privacy-star-8">
                                    <Image src={star1} className='blinking-star  privacy-trans-star4 ' fluid />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
