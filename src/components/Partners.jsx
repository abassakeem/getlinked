import React from 'react'
import libertyassured from "./../assets/Liberty company logo white colour.png"
import libertypay from "./../assets/Liberty company logo white.png"
import winwise from "./../assets/Winwise logo White colour 1.png"
import whisper from "./../assets/wisper logo white.png"
import paybox from "./../assets/paybox.png"
import vuzual from "./../assets/vuzual.png"

import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Partners() {
    return (
        <>
            <div className="partners-section-container vh-100 d-flex justify-content-center align-items-center text-center">
                <Container>
                    <div className="partners-row ">


                        <Row>
                            <Col xs={12}>
                                <h1 className='section-header'>Partners and Sponsors</h1>
                                <p className='section-subtext'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>

                            </Col>
                            <Col xs={12}>
                                <Container className='sponsors-container d-flex  justify-content-center align-items-center'>
                                    <Row className='d-flex justify-content-center align-items-center g-5 '>
                                        <Col xs={4} className=''>
                                            <div className="position-relative">
                                            <div className="sponsor-logo libertyassured ">
                                                <Image src={libertyassured} className='libertyassured-partner' fluid/>
                                                </div>
                                                <div className="line line1"></div>
                                                </div>
                                        </Col>
                                        <Col xs={4} className='position-relative'>
                                            <div className="sponsor-logo libertypay">
                                            <Image src={libertypay} fluid  className='libertypay-partner'/></div>
                                            <div className="line line1"></div>
                                        </Col>
                                        <Col xs={4} className='position-relative'>
                                            <div className="sponsor-logo winwise">
                                            <Image src={winwise} fluid className='winwise-partner'/></div>
                                            <div className="line line1"></div>
                                        </Col>
                                        <Col xs={4} className=''>
                                            <div className="sponsor-logo whisper">
                                            <Image src={whisper} fluid className='whisper-partner'/></div>
                                        </Col>
                                        <Col xs={4} className=''>
                                            <div className="sponsor-logo paybox">
                                            <Image src={paybox} fluid className='paybox-partner'/></div>
                                        </Col>
                                        <Col xs={4} className=''>
                                            <div className="sponsor-logo vuzual">
                                            <Image src={vuzual} fluid className='vuzual-partner'/></div>
                                        </Col>

                                    </Row>
                                </Container>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}
