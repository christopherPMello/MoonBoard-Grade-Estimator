import React, { Component } from "react"
import VizSensor from "react-visibility-sensor"

import Page from "./Page"

import Foggy from "../attachments/Foggy_Mountain.mp4"
import MB_Diagram from "../attachments/moonboard_diagram.png"

import "../components-css/About.css"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      colorVisible: true,
      rulesVisible: true,
      estimateVisible: true,
      aboutVisible: true,
    }
    window.addEventListener("resize", this.handleResize)
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    return (
      <>
        <Page title="About" noContainer={true}>
          <header className="About-header">
            <div className="About-overlay"></div>
            <video className="About-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
              <source src={Foggy} type="video/mp4" />
            </video>
            <div className="About-container container h-100">
              <div className="d-flex h-100 text-center align-items-center">
                <div className="w-100 text-white">
                  <h1 className="display-3 About-header-text-size">MoonBoard Grade Estimator</h1>
                  <p className={"lead mb-0 About-subheader-text-size " + (this.state.windowWidth <= 300 ? "About-subheader-text-size-small" : "")}>Using machine learning to better understand the complex world of grading</p>
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className="About-pd-top"></div>
            <div className={this.state.colorVisible ? "About-fade-in" : "About-invis"}>
              <VizSensor
                onChange={() => {
                  this.setState((prev) => ({ colorVisible: !prev.colorVisible }))
                }}
                partialVisibility={true}
                minTopValue={100}
              >
                <div>
                  <div className="row">
                    <div className="col About-hand-col">
                      <h1 className={"About-hand About-text-ajdsize " + (this.state.windowWidth <= 400 ? "About-text-ajdsize-small" : "")}>Color Guidelines</h1>
                      <i className={"col About-hand fas fa-palette fa-7x " + (this.state.windowWidth <= 400 ? "About-icon-adjsize-small" : "")}></i>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col About-col">
                      <img className={this.state.windowWidth >= 850 ? "About-mb-img" : "About-mb-img-small"} src={MB_Diagram} alt="" />
                    </div>
                  </div>
                </div>
              </VizSensor>
            </div>

            <div className="About-pd-top"></div>
            <div className={this.state.rulesVisible ? "About-fade-in" : "About-invis"}>
              <VizSensor
                onChange={() => {
                  this.setState((prev) => ({ rulesVisible: !prev.rulesVisible }))
                }}
                partialVisibility={true}
                minTopValue={100}
              >
                <div>
                  <div className="row">
                    <div className="col About-hand-col">
                      <h1 className={"About-hand About-text-ajdsize " + (this.state.windowWidth <= 400 ? "About-text-ajdsize-small" : "")}>Rules</h1>
                      <i className={"col About-hand far fa-hand-paper fa-7x " + (this.state.windowWidth <= 400 ? "About-icon-adjsize-small" : "")}></i>
                    </div>
                  </div>

                  <div className={"About-card card " + (this.state.windowWidth <= 450 ? "w-100" : "")}>
                    <div className="card-body">
                      <div className="ui-tooltip" title="A starting hold is defined as a hand or foot hold on or beneith the 6th row.">
                        <p className="About-card-text">
                          At least 1 <em className="About-definition-help">starting hold</em> is required.
                        </p>
                      </div>
                      <div className="ui-tooltip About-card-text" title="A finishing hold is defined as a hand hold on the 18th row.">
                        <p className="About-card-text">
                          At least 1 <em className="About-definition-help">finishing hold</em> is required.
                        </p>
                      </div>
                      <div className="ui-tooltip About-card-text" title="A hand hold is defined as a non-foot hold above the 6th row">
                        <p className="About-card-text">
                          At least 1 <em className="About-definition-help">hand hold</em> is required.
                        </p>
                      </div>
                      <div className="ui-tooltip About-card-text">
                        <p className="About-card-text">A maximum of 14 holds is allowed.</p>
                      </div>
                      <div className="About-card-text">
                        <a className="btn btn-dark btn-sm" href="https://www.moonboard.com/moonboard-rules">
                          Official MoonBoard Rules
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </VizSensor>
            </div>

            <div className="About-pd-top"></div>
            <div className={this.state.estimateVisible ? "About-fade-in" : "About-invis"}>
              <VizSensor
                onChange={() => {
                  this.setState((prev) => ({ estimateVisible: !prev.estimateVisible }))
                }}
                partialVisibility={true}
                minTopValue={100}
              >
                <div>
                  <div className="row">
                    <div className="col About-hand-col">
                      <h1 className={"About-hand " + (this.state.windowWidth <= 400 ? "About-text-ajdsize-small" : "")}>Estimation</h1>
                      <i className={"col About-hand fas fa-brain fa-7x " + (this.state.windowWidth <= 400 ? "About-icon-adjsize-small" : "")}></i>
                    </div>
                  </div>

                  <div className={"About-card card " + (this.state.windowWidth <= 450 ? "w-100" : "")}>
                    <div className="card-body">
                      <div className="card-body About-card-text">
                        <p className="About-card-text">The estimation process is determined by a convolutional neural network.</p>
                        <p>More details can be found on my gitHub.</p>
                      </div>
                      <div className="About-card-text">
                        <a className="btn btn-dark btn-sm" href="https://github.com/christopherPMello">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </VizSensor>
            </div>

            <div className="About-pd-top"></div>
            <div className={this.state.aboutVisible ? "About-fade-in" : "About-invis"}>
              <VizSensor
                onChange={() => {
                  this.setState((prev) => ({ aboutVisible: !prev.aboutVisible }))
                }}
                partialVisibility={true}
                minTopValue={100}
              >
                <div>
                  <div className="row">
                    <div className="col About-hand-col">
                      <h1 className={"About-hand " + (this.state.windowWidth <= 300 ? "About-text-ajdsize-small" : "")}>About</h1>
                      <i className={"col About-hand far fa-grin fa-7x " + (this.state.windowWidth <= 300 ? "About-icon-adjsize-small" : "")}></i>
                    </div>
                  </div>

                  <div className={"About-card card " + (this.state.windowWidth <= 450 ? "w-100" : "")}>
                    <div className="card-body About-card-text">
                      <p className="About-card-text">Like many others during COVID, I built a MoonBoard. Also like many others, I found grading routes alone to be a difficult process. So, I created this MoonBoard grade estimator.</p>
                      <p className="About-card-text">Because grading is inherently subjective, accurately determining a grade algorithmically is somewhat… well… impossible; however, I believe the process is helpful nonetheless.</p>
                      <p className="About-card-text">I hope you have as much fun using this route grader as I had making it.</p>
                    </div>
                  </div>
                </div>
              </VizSensor>
            </div>
          </div>
        </Page>
      </>
    )
  }
}

export default About
