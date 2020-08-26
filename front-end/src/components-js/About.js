import React from "react"

import Page from "./Page"

import Foggy from "../helpers/Foggy_Mountain.mp4"
import MB_Diagram from "../helpers/moonboard_diagram.png"
import "../components-css/About.css"

const About = () => {
  return (
    <>
      <Page title="About" noContainer={true}>
        <header className="About-header">
          <div className="About-overlay"></div>
          <video className="About-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={Foggy} type="video/mp4" />
          </video>
          <div className="About-container container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">MoonBoard Grade Estimator</h1>
                <p className="lead mb-0">Using ML to better understand the complex world of grading</p>
              </div>
            </div>
          </div>
        </header>

        <div classname="container">
          <div className="row">
            <div className="col About-hand-col">
              <h1 className="About-hand">Color Guidelines</h1>
              <i className="col About-hand far fa-hand-paper fa-7x"></i>
            </div>
          </div>

          <div className="row">
            <div className="col About-col">
              <img className="About-mb-img" src={MB_Diagram} />
            </div>
          </div>

          <div className="row">
            <div className="col About-hand-col">
              <h1 className="About-hand">Rules</h1>
              <i className="col About-hand far fa-hand-paper fa-7x"></i>
            </div>
          </div>

          <div className="row">
            <div className="col About-col">
              <ul className="About-ul">
                <li>At least 1 starting hold is required.</li>
                <ul className="About-ul">
                  <li>
                    A starting hold is defined as a <strong> hand </strong>hold on or beneith row 6.
                  </li>
                </ul>
                <li>At least 1 finishing hold is required </li>
                <ul className="About-ul">
                  <li>A finishing hold is defined as a hold at row 18</li>
                </ul>
                <li>You are permitted to use any part of the numbered hold.</li>
                <li>Matching and heel hooking is permitted.</li>
                <li> The grading system is either Font or V grades. You can change this in the App settings.</li>
              </ul>
              <a className="text-white" href="https://www.moonboard.com/moonboard-rules">
                Offical MoonBoard Rules
              </a>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default About
