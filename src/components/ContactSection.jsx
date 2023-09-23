import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import light from "./../assets/purple-left-register.png";
import light2 from "./../assets/Purple-Lens-Flare-PNG.png";
import { useContact } from "../hooks";
export default function ContactSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const { mutate, isError, error, isSuccess, reset } = useContact();

  const handleSubmit = () => {
    mutate(formData);
  };

  if (isSuccess) {
    reset();
    setFormData({});
    setShow(true);
  }
  if (isError) {
    reset();
    console.log(error);
  }

  return (
    <>
      <div className="vh-100 contact-container d-flex justify-content-center align-items-center mt-5">
        <Container>
          <Row className="  ">
            <Col className="d-none d-md-block">
              <Image src={light} fluid className="light-flare-reg1" />
              <h3 className="contact-header">Get in touch</h3>
              <div className="contact-information">
                <h6 className="contact-subheading">Contact information</h6>
                <p>
                  27,Alara Street
                  <br />
                  Yaba 100012
                  <br />
                  Lagos State
                </p>
                <p>
                  Call Us :{" "}
                  <a href="tel: 07067981819" className="phone-number">
                    07067981819
                  </a>{" "}
                </p>
                <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
                <p className="share-on">Share on </p>
                <div className="social-media">
                  <AiOutlineInstagram /> <RiTwitterXLine /> <FaFacebookF />{" "}
                  <FaLinkedinIn />
                </div>{" "}
              </div>
            </Col>
            <Col>
              <div className="form-section">
                <div className="form-header d-flex justify-content-center">
                  <div className="hm">
                    <h3>Questions or need assistance?</h3>
                    <h5>Let us know about it!</h5>
                    <p className="email-us-text mont-white">
                      Email us below to any question related to our event
                    </p>
                  </div>
                </div>

                <div className="contact-form mt-3 ">
                  <form className="d-flex flex-column pt-3 justify-content-start align-items-start">
                    <div>
                      <input
                        type="email"
                        placeholder="Mail"
                        className="mt-3"
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        onChange={(e) =>
                          handleChange("phone_number", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="mt-3"
                        onChange={(e) =>
                          handleChange("first_name", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Message"
                        className="mt-5"
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                      />
                    </div>

                    <button
                      type="button"
                      className=" submit-btn   btn contact-btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <Image
                src={light2}
                fluid
                className=" light-flare light-flare-reg2"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
