import React from 'react'
import libertyassured from "./../assets/Liberty company logo white colour.png"
import libertypay from "./../assets/Liberty company logo white.png"
import winwise from "./../assets/Winwise logo White colour 1.png"
import whisper from "./../assets/wisper logo white.png"
import paybox from "./../assets/paybox.png"
import vuzual from "./../assets/vuzual.png"
import light from "./../assets/Purple-Lens-Flare-PNGpart1.png"
import light1 from "./../assets/Purple-Lens-Flare-PNGpart.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Partners() {
    return (
        <div className="position-relative">
             < Image fluid src={light} className='part-light1'/>
        <div className="partners">
          <div className="header">
            <h1 className="section-header">Partners and Sponsors</h1>
            <p className="section-subtext">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <div className="images">
            <div className="box">
              <div className="top">
                <div className="imgBox">
                  <img
                    src={libertyassured}
                    alt=""
                  />
                </div>
                <div className="topLine"></div>
                <div className="imgBox">
                  <img src={libertypay} alt="" />
                </div>
                <div className="topLine"></div>
                <div className="imgBox">
                  <img src={winwise} alt="" />
                </div>
              </div>
              <div className="horizLine">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="top">
                <div className="imgBox">
                  <img src={whisper} alt="" />
                </div>
                <div className="topLine"></div>
                <div className="imgBox">
                  <img src={paybox} alt="" />
                </div>
                <div className="topLine"></div>
                <div className="imgBox">
                  <img src={vuzual} alt="" />
                </div>
              </div>
              < Image fluid src={light1} className='part-light d-none d-md-block'/>
            </div>
          </div>
        </div>
        </div>
      );
}
