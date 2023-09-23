import React, { useState } from "react";
import img from "./../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import man from "./../assets/small woman.png";
import woman from "./../assets/small man.png";
import congratulation from "./../assets/congratulation.png";
import wink from "./../assets/wink emoji.png";
import light from "./../assets/purple-left-register.png";
import light2 from "./../assets/Purple-Lens-Flare-PNG.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useCategoryList, useRegister } from "../hooks";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

export default function RegisterSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    privacy_policy_accepted: false,
    category: "",
    group_size: "",
  });
  const handleChange = (name, value) => {
    if (name === "privacy_policy_accepted") {
      setFormData({ ...formData, [name]: !formData.privacy_policy_accepted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const data = useCategoryList();
  console.log(data);

  const { mutate, isError, error, isSuccess, reset } = useRegister();

  const handleSubmit = () => {
    mutate(formData);
    console.log(formData);
  };

  if (isSuccess) {
    reset();
    setFormData({});
    setShow(true);
  }
  if (isError) {
    reset();
    setShow(true);
  }

  return (
    <>
      <div className="register-container position-relative vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <Col sm={6}>
              <div className="register-information">
                <Image src={img} fluid />
              </div>

              <Image src={light} fluid className="light-flare-reg1" />
            </Col>
            <Col sm={6}>
              <div className="form-section">
                <div className="form-header">
                  <h3 className="section header register-header">Register</h3>
                </div>
                <div className="form-subheader ">
                  <span className="movement">Be part of this movement</span>
                  <span className="walking text-end">
                    <Image src={woman} className="woman-img" fluid />
                    <Image src={man} className="man-img " fluid />
                  </span>
                </div>
                <div className="register-form mt-3">
                  <form>
                    <div className="create-account-header">
                      <p>CREATE YOUR ACCOUNT</p>
                    </div>
                    <Row className=" justify-content-between align-items-end">
                      <Col md={6} xs={12} className="mb-3">
                        <label htmlFor="team_name" className="mb-2">
                          {" "}
                          Teams's name
                        </label>
                        <br />
                        <input
                          onChange={(e) =>
                            handleChange("team_name", e.target.value)
                          }
                          name="team_name"
                          type="text"
                          placeholder="Enter the name of your group"
                        />
                      </Col>
                      <Col md={6} xs={12} className="mb-3">
                        <label htmlFor="phone_number" className="mb-2">
                          Phone
                        </label>
                        <br />
                        <input
                          onChange={(e) =>
                            handleChange("phone_number", e.target.value)
                          }
                          name="phone_number"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                      </Col>
                      <Col md={6} xs={12} className="mb-3">
                        <label htmlFor="email" className="mb-2">
                          Email
                        </label>
                        <br />
                        <input
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </Col>
                      <Col md={6} xs={12} className="mb-3">
                        <label htmlFor="project_topic" className="mb-2">
                          Project Topic
                        </label>
                        <br />
                        <input
                          onChange={(e) =>
                            handleChange("project_topic", e.target.value)
                          }
                          name="project_topic"
                          type="text"
                          placeholder="What is your project topic"
                        />
                      </Col>
                      <Col md={6} xs={12} className="mb-3">
                        <label htmlFor="category" className="mb-2">
                          Category
                        </label>
                        <br />
                        <select
                          onChange={(e) =>
                            handleChange("category", e.target.value)
                          }
                          name="category"
                          id="category"
                          className="category-group"
                          value={formData.category}
                        >
                          <option value="">Select your category</option>
                          {data.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </Col>
                      <Col md={6} xs={12} className="mb-3">
                        <label htmlFor="group_size" className="mb-2">
                          Group Size
                        </label>
                        <br />
                        <select
                          onChange={(e) =>
                            handleChange("group_size", e.target.value)
                          }
                          name="group_size"
                          id="group_size"
                          className="size-group"
                        >
                          <option value="">Select You Group Size</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </Col>

                      <p className="review-text">
                        Please review your registration details before
                        submitting
                      </p>
                      <div className="agree">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={() =>
                            handleChange("privacy_policy_accepted", undefined)
                          }
                          checked={formData.privacy_policy_accepted}
                        />{" "}
                        I agree with the event terms and conditions and privacy
                        policy
                      </div>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="submit-btn mt-4 btn mb-5 "
                      >
                        Submit
                      </button>
                      <Image
                        src={light2}
                        fluid
                        className=" light-flare light-flare-reg2"
                      />
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body className="bg-secondary">
            <div className="modelBox">
              <div className="imageContainer">
                <img src={congratulation} alt="" />
              </div>
              <div className="downSection">
                <div className="text">
                  <h1>Congratulations</h1>
                  <h1>you have successfully Registered!</h1>
                </div>
                <p>
                  Yes, it was easy and you did it! check your mail box for next
                  step
                  <img src={wink} alt="" />
                </p>
                <button onClick={handleClose}>Back</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
