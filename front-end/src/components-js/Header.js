import React, { Component } from "react"
import "../components-css/Header.css"

import { scrollTopGuard } from "./Footer"
import { Link } from "react-router-dom"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    }
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
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
        <nav className={this.state.visible ? "navbar navbar-expand-md fixed-top navbar-dark transparent" : "navbar navbar-expand-sm fixed-top navbar-dark transparent Home-header-fade-out"}>
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link onClick={scrollTopGuard} className="navbar-brand" to="/">
              MoonBoard Grade Estimator
            </Link>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link onClick={scrollTopGuard} className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link onClick={scrollTopGuard} className="nav-link" to="/login">
                    Log-in
                  </Link>
                </li>
                <form class="form-inline my-2 my-lg-0 nav-item">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search Graded Routes" aria-label="Search" />
                  <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Header
