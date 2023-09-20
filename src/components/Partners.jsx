import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
                                    <Row className=' '>
                                        <Col xs={4}>
                                            <div className="sponsor-logo">
                                                liberty assured</div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="sponsor-logo">
                                                libertyPay</div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="sponsor-logo">
                                                WinWise</div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="sponsor-logo">
                                                whispersms</div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="sponsor-logo">
                                                paybox</div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="sponsor-logo">
                                                vizualplus</div>
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
