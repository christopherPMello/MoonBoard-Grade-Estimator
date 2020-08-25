import React, { Component } from "react"
import { Button } from "reactstrap"
// import Axios from "axios"

import { scrollTopGuard } from "./Footer"

import "../components-css/Submit.css"

class Submit extends Component {
  getGrade = () => {
    let info = {}
    let route = {}
    route.hand = this.props.board.areas.filter((x) => x.strokeColor === "green" || x.strokeColor === "blue")
    route.finish = this.props.board.areas.filter((x) => x.strokeColor === "red")
    try {
      // info.alertBadgeMessage = "Estimated Grade: " + await Axios.post("http://127.0.0.1:5000/", route)
      info.alert = false
      info.alertBadgeColor = "success"
      info.alertBadgeMessage = "Estimated Grade: 7A"
    } catch (e) {
      info.alert = true
      info.alertBadgeColor = "danger"
      info.alertBadgeMessage = "There was a server error"
    }
    return info
  }
  boardValidator = () => {
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
      info = this.getGrade()
    }
    scrollTopGuard(600)
    this.props.updateAlertBadge(info)
  }
  render() {
    return (
      <div className="Submit-center">
        <Button onClick={this.boardValidator} type="button Submit-button-bkg" className="btn btn-secondary btn-sm">
          Estimate Grade
        </Button>
      </div>
    )
  }
}

export default Submit
