import React, { Component } from "react"
import { Alert } from "reactstrap"

import "../components-css/AlertBadge.css"

class AlertBadge extends Component {
  onDismiss = () => {
    let info = {
      alert: false,
      alertBadgeMessage: "Create. Submit. Be disappointed",
      alertBadgeColor: "dark",
    }
    this.props.updateAlertBadge(info)
  }
  render() {
    return (
      <>
        {this.props.alert && (
          <Alert className="Alert-center About-info-text-size" color={this.props.alertBadgeColor} isOpen={this.props.alert} toggle={this.onDismiss} fade={false}>
            {this.props.alertBadgeMessage}
          </Alert>
        )}
        {!this.props.alert && (
          <Alert className="Alert-center About-submit-text-size" color={this.props.alertBadgeColor}>
            {this.props.alertBadgeMessage}
          </Alert>
        )}
      </>
    )
  }
}

export default AlertBadge
