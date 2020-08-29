import React, { Component } from "react"
import VizSensor from "react-visibility-sensor"

import "../components-css/Home.css"
import Board from "./Board"
import Page from "./Page"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  render() {
    return (
      <>
        <div>
          <div className="Home-header-sharma" title="Photo: Brett Lowell" />
        </div>
        <div className={this.state.visible ? "Home-arrow-position" : "Home-arrow-position Home-arrow-hidden"}>
          <div className="Home-arrow-a Home-arrow Home-bounce Home-arrow-body">
            <div className="fa fa-arrow-down fa-2x" href="/" />
          </div>
        </div>
        <div className={this.state.visible ? "Home-board-fade-out" : "Home-board-fade-in"}>
          <Page title="Home">
            <VizSensor
              onChange={() => {
                this.setState((prev) => ({ visible: !prev.visible }))
              }}
              partialVisibility={true}
              minTopValue={100}
            >
              <Board />
            </VizSensor>
          </Page>
        </div>
      </>
    )
  }
}

export default Home
