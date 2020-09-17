import React, { Component } from "react"
import { Link } from "react-router-dom"

import Page from "./Page"

import "../components-css/Sign-up.css"

class Signup extends Component {
  render() {
    return (
      <>
        <Page title="Log-in" margin="mt-5" padding="pt-5">
          <div className="card w-50">
            <div className="card-body">
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="md-form">
                  <i className="fa fa-user prefix grey-text"></i>
                  <input type="text" id="materialFormCardNameEx" className="form-control" />
                  <label htmlFor="materialFormCardNameEx" className="font-weight-light">
                    Your username
                  </label>
                </div>
                <div className="md-form">
                  <i className="fa fa-exclamation-triangle prefix grey-text"></i>
                  <input type="email" id="materialFormCardConfirmEx" className="form-control" />
                  <label htmlFor="materialFormCardConfirmEx" className="font-weight-light">
                    Confirm your username
                  </label>
                </div>
                <div className="md-form">
                  <i className="fa fa-lock prefix grey-text"></i>
                  <input type="password" id="materialFormCardPasswordEx" className="form-control" />
                  <label htmlFor="materialFormCardPasswordEx" className="font-weight-light">
                    Your password
                  </label>
                </div>
                <div className="text-center py-4 mt-3 ">
                  <button className="btn btn-cyan Signup-create-account" type="submit">
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <span>Already registered?</span>
                  <Link className="btn btn-cyan Signup-create-account" to="/login">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Page>
        <div className="Signup-pd-btm"></div>
      </>
    )
  }
}

export default Signup
