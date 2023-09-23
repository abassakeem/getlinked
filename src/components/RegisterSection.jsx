import React from 'react'
import img from "./../assets/3d-graphic-designer-showing-thumbs-up-png 1.png"
import man from "./../assets/small woman.png"
import woman from "./../assets/small man.png"
import light from "./../assets/purple-left-register.png"
import light2 from "./../assets/Purple-Lens-Flare-PNG.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function RegisterSection() {
    return (
        <>
            <div className="register-container position-relative vh-100">
                <Container>
                    <Row>
                        <Col sm={6}>

                            <div className="register-information">
                                <Image src={img} fluid />
                                
                            </div>
                            
                            <Image src={light} fluid className='light-flare-reg1' />

                        </Col>
                        <Col sm={6}>
                            <div className="form-section">
                                <div className="form-header">
                                    <h3 className='section header register-header'>Register</h3>

                                </div>
                                <div className="form-subheader ">
                                    <span className='movement'>Be part of this movement</span>
                                    <span className="walking text-end">
                                        <Image
                                            src={woman} className='woman-img' fluid />
                                        <Image src={man} className='man-img ' fluid />
                                    </span>

                                </div>
                                <div className="register-form mt-3">


                                    <form>
                                        <div className="create-account-header">
                                            <p>CREATE YOUR ACCOUNT</p>
                                        </div>
                                        <Row className=' justify-content-between align-items-end'>

                                            <Col md={6} xs={12} className='mb-3'>

                                                <label for="team_name" className='mb-2'> Teams's name</label><br />
                                                <input id="team_name" type='text' placeholder='Enter the name of your group' />
                                            </Col>
                                            <Col md={6} xs={12} className='mb-3'>
                                                <label for="phone_number m-3" className='mb-2 '>Phone</label><br />
                                                <input id="phone_number" type='text' placeholder='Enter your phone number' />
                                            </Col>
                                            <Col md={6} xs={12} className='mb-3'>
                                                <label for="email" className='mb-2'>Email</label><br />
                                                <input id="email" type='email' placeholder='Enter your email address' />
                                            </Col>
                                            <Col md={6} xs={12} className='mb-3'>
                                                <label for="project_topic" className='mb-2'>Project Topic</label><br />
                                                <input id="project_topic" type='text' placeholder='What is your project topic' />
                                            </Col>
                                            <Col className='d-flex gap-3'>
                                            <div xs={3} className='mb-3'>
                                                <label for="category" className='mb-2'>Category</label><br />
                                                <select name="group size" id="group_size" className='category-group'>

                                                    <option >Select your category</option>
                                                    <option >Extra large</option>
                                                    <option >large</option>
                                                    <option >small</option>
                                                    <option>little</option>

                                                </select>
                                            </div>
                                            <div sm={2} className='mb-3'>
                                                <label for="group_size" className='mb-2'>Group Size</label><br />
                                                <select name="group size" id="group_size" className='size-group'>

                                                    <option >Select</option>
                                                    <option >Extra large</option>
                                                    <option >large</option>
                                                    <option >small</option>
                                                    <option>little</option>

                                                </select>
                                            </div>
                                            
                                            </Col>
                                            <p className='review-text'>Please review your registration details before submitting</p>
                                            <div className="agree" >
                                                <input type='checkbox' className='checkbox' /> I agreed with the event terms and conditions
                                                and privacy policy</div>
                                            <button type='button' className='submit-btn mt-4 btn mb-5 '>Submit</button>
                                            <Image src={light2} fluid className=' light-flare light-flare-reg2' />
                                        </Row>
                                      
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
