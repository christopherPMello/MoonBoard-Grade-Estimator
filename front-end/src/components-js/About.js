import React from "react"

import Page from "./Page"

import Foggy from "../helpers/Foggy_Mountain.mp4"
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
        <div className="container">
          <div className="row">
            <div className="col About-hand-col">
              <i className="About-hand far fa-hand-paper fa-7x"></i>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default About
