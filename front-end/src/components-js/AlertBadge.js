import React, { Component } from "react"
import { Alert } from "reactstrap"

import "../components-css/AlertBadge.css"

class AlertBadge extends Component {
  onDismiss = () => {
    let info = {
      alert: false,
      alertBadgeMessage: "Create a route then submit!",
      alertBadgeColor: "dark",
    }
    this.props.updateAlertBadge(info)
  }

  render() {
    return (
      <>
        {this.props.alert && (
          <Alert className="Alert-center" color={this.props.alertBadgeColor} isOpen={this.props.alert} toggle={this.onDismiss} fade={false}>
            <span className={this.props.windowWidth <= 450 ? "Alert-info-text-size" : ""}> {this.props.alertBadgeMessage}</span>
          </Alert>
        )}
        {!this.props.alert && (
          <Alert className="Alert-center" color={this.props.alertBadgeColor}>
            <span className={this.props.windowWidth <= 450 ? "Alert-info-text-size" : ""}>{this.props.alertBadgeMessage}</span>
          </Alert>
        )}
      </>
    )
  }
}

export default AlertBadge
