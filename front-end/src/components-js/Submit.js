import React, { Component } from "react"
import { Button } from "reactstrap"
import Axios from "axios"

import { scrollTopGuard } from "./Footer"

import "../components-css/Submit.css"

class Submit extends Component {
  getGrade = async () => {
    let info = {}
    let route = {}
    route.hand = this.props.board.areas.filter((x) => x.strokeColor === "green" || x.strokeColor === "blue")
    route.finish = this.props.board.areas.filter((x) => x.strokeColor === "red")

    try {
      info.alert = false
      info.alertBadgeColor = "success"
      let res = await Axios.post("http://127.0.0.1:5000/grade", route)
      info.alertBadgeMessage = "Estimated Grade: " + (await res.data)
      console.log(res)
    } catch (e) {
      info.alert = true
      info.alertBadgeColor = "warning"
      info.alertBadgeMessage = "Server error"
    }

    return info
  }
  boardValidator = async () => {
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
      info.alertBadgeMessage = "Estimating Grade ..."
      info.alert = false
      info.alertBadgeColor = "success"
    }
    scrollTopGuard(600)
    // Update temporary result
    this.props.updateAlertBadge(info)
    // Update final result
    this.props.updateAlertBadge(await this.getGrade())
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
