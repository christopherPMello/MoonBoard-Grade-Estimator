import React, { Component } from "react"
import ImageMapper from "react-image-mapper"

import "../components-css/Board.css"

import { moonMap } from "../helpers/MoonboardCoords"
import moon from "../helpers/moonboard.png"

import AlertBadge from "./AlertBadge"
import Submit from "./Submit"

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: moonMap,
      hold: 0,
      finalHold: 0,
      footHold: 0,
      startHold: 0,
      reloadStatus: false,
      alert: false,
      alertBadgeColor: "dark",
      alertBadgeMessage: "Create. Submit. Be disappointed",
      grade: null,
      showGrade: false,
    }
  }

  updateAlertBadge = (info) => {
    this.setState((prev) => ({
      alert: info.alert,
      alertBadgeColor: info.alertBadgeColor,
      alertBadgeMessage: info.alertBadgeMessage,
    }))
  }

  determineMovement = (area) => {
    // Get current color of hold
    const currentColor = area.strokeColor
    let newColor = currentColor

    // Check if the maximum of holds have been reached
    if (this.state.hold >= 14 && currentColor === "transparent") {
      // alertBadgeChange("There is a maximum of 14 holds per route.")
      return currentColor
    }

    // Determine color of new hold and update states
    if (currentColor === "red") {
      newColor = "blue"
      this.setState((prev) => ({ finalHold: prev.finalHold - 1 }))
    } else if (currentColor === "green") {
      this.setState((prev) => ({
        startHold: prev.startHold + 1,
        footHold: prev.footHold - 1,
      }))
      newColor = "blue"
    } else if (currentColor === "blue") {
      if (area.row <= 6) {
        this.setState((prev) => ({ startHold: prev.startHold - 1 }))
      }
      newColor = "transparent"
      this.setState((prev) => ({ hold: prev.hold - 1 }))
    } else {
      if (area.row === 18) {
        if (this.state.finalHold < 2) {
          newColor = "red"
          this.setState((prev) => ({
            finalHold: prev.finalHold + 1,
            hold: prev.hold + 1,
          }))
          return newColor
        }
      } else if (area.row <= 6) {
        if (this.state.footHold < 2) {
          newColor = "green"
          this.setState((prev) => ({
            finalHold: prev.footHold + 1,
            hold: prev.hold + 1,
          }))
          return newColor
        } else {
          this.setState((prev) => ({ startHold: prev.startHold + 1 }))
        }
      }
      newColor = "blue"
      this.setState((prev) => ({ hold: prev.hold + 1 }))
    }
    return newColor
  }

  circle = (area) => {
    // Get new color
    const newColor = this.determineMovement(area)
    // Copy previous board and change single color
    let newBoard = Object.assign({}, this.state.board)
    newBoard.areas.find((a) => a.id === area.id).strokeColor = newColor

    // Update current state
    this.setState({ board: newBoard })
  }

  render() {
    return (
      <>
        <div>
          <AlertBadge className="col-md-6" updateAlertBadge={this.updateAlertBadge} alertBadgeMessage={this.state.alertBadgeMessage} alert={this.state.alert} alertBadgeColor={this.state.alertBadgeColor} />
          <div className="Board-center">
            <ImageMapper className="MoonBoard-img center col-md-6" src={moon} map={moonMap} onClick={(area) => this.circle(area)} />
          </div>
          <Submit className="col-md-6" updateAlertBadge={this.updateAlertBadge} board={this.state.board} startHold={this.state.startHold} hold={this.state.hold} footHold={this.state.footHold} finalHold={this.state.finalHold} />
        </div>
      </>
    )
  }
}

export default Board
