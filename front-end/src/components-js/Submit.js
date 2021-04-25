import React, { Component } from "react"
import { Button } from "reactstrap"
import Axios from "axios"

import { smoothScroll } from "./Footer"

import "../components-css/Submit.css"

class Submit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
  }
  getGrade = async () => {
    let info = {}
    let route = {}
    route.hand = this.props.board.areas.filter((x) => x.strokeColor === "green" || x.strokeColor === "blue")
    route.finish = this.props.board.areas.filter((x) => x.strokeColor === "red")

    try {
      info.alert = false
      info.alertBadgeColor = "success"
      try {
        // running through docker
        let res = await Axios.post("http://localhost:5000/grade/", route)  
      } catch (e) {
        // running through heroku
        let res = await Axios.post("https://mb-grade-estimator.herokuapp.com/grade", route)
      }
      info.alertBadgeMessage = "Estimated grade: " + (await res.data.fgrade) + " | " + (await res.data.vgrade)
    } catch (e) {
      info.alert = true
      info.alertBadgeColor = "warning"
      info.alertBadgeMessage = "Server error"
    }

    return info
  }
  boardValidator = async () => {
    if (this.state.submitted) {
      // Refresh board
      this.props.refreshMoonBoard()
      smoothScroll(550)
      this.setState((prev) => ({ submitted: !prev.submitted }))
      return
    }

    let gradeRoute = false
    let info = {
      alert: true,
      alertBadgeColor: "warning",
    }
    if (this.props.finalHold === 0) {
      info.alertBadgeMessage = "At least one finishing hold is required"
    } else if (this.props.footHold + this.props.finalHold === this.props.hold) {
      info.alertBadgeMessage = "At least one hand hold is required"
    } else if (this.props.hold < 2) {
      info.alertBadgeMessage = "At least two holds are required"
    } else if (this.props.startHold < 1) {
      info.alertBadgeMessage = "At least one starting hold is requred "
    } else {
      // Valid request
      info.alertBadgeMessage = "Estimating grade ..."
      info.alert = false
      info.alertBadgeColor = "success"
      gradeRoute = true
    }
    smoothScroll(550)
    // Update temporary result
    this.props.updateAlertBadge(info)
    // Update final result
    if (gradeRoute === true) {
      this.setState((prev) => ({ submitted: !prev.submitted }))
      this.props.updateAlertBadge(await this.getGrade())
    }
  }
  render() {
    return (
      <div className="Submit-center">
        <Button onClick={this.boardValidator} type="button Submit-button-bkg" className="btn btn-secondary btn-sm">
          {this.state.submitted ? <div>Grade Another Route</div> : <div>Estimate Grade</div>}
        </Button>
      </div>
    )
  }
}

export default Submit
