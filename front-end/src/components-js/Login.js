import React, { Component } from "react"
import { Link } from "react-router-dom"

import Page from "./Page"

import "../components-css/Login.css"

class Signin extends Component {
  render() {
    return (
      <>
        <Page title="Log-in" margin="mt-5" padding="pt-5">
          <div className="card w-50">
            <div className="card-body">
              <form>
                <p className="h4 text-center py-4">User Login</p>
                <div className="md-form">
                  <i className="fa fa-user prefix grey-text"></i>
                  <input type="text" id="materialFormCardNameEx" className="form-control" />
                  <label htmlFor="materialFormCardNameEx" className="font-weight-light">
                    Username
                  </label>
                </div>
                <div className="md-form">
                  <i className="fa fa-lock prefix grey-text"></i>
                  <input type="password" id="materialFormCardPasswordEx" className="form-control" />
                  <label htmlFor="materialFormCardPasswordEx" className="font-weight-light">
                    Password
                  </label>
                </div>
                <div className="text-center py-4 mt-3 ">
                  <button className="btn btn-cyan Login-create-account" type="submit">
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <span>Not registered?</span>
                  <Link className="btn btn-cyan Login-create-account" to="/sign-up">
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Page>
        <div className="Login-pd-btm"></div>
      </>
    )
  }
}

export default Signin
