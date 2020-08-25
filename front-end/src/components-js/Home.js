import React, { Component } from "react"
import VizSensor from "react-visibility-sensor"

import "../components-css/Home.css"
import Board from "./Board"
import Page from "./Page"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      b_visible: false,
    }
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  boardInSight = (visible) => {
    this.setState((prev) => ({
      b_visible: !prev.b_visible,
    }))
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
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
        <div className={this.state.b_visible ? "Home-board-fade-out" : "Home-board-fade-in"}>
          <Page title="Home">
            <VizSensor onChange={this.boardInSight} partialVisibility={true} minTopValue={100}>
              <Board />
            </VizSensor>
          </Page>
        </div>
      </>
    )
  }
}

export default Home
