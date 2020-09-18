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
        <nav className={this.state.visible ? "navbar navbar-expand-md fixed-top bg-light navbar-light" : "navbar navbar-expand-md fixed-top bg-light navbar-light Home-header-fade-out"}>
          <Link onClick={scrollTopGuard} className="navbar-brand Header-brand-text" to="/">
            MoonBoard Grade Estimator
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link onClick={scrollTopGuard} className="nav-link text-dark" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={scrollTopGuard} className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link onClick={scrollTopGuard} className='nav-link text-dark' to='/login'>
                  Login
                </Link>
              </li> */}
            </ul>

            {/* <form className='form-inline'>
              <div className='md-form my-0'>
                <input className='form-control mr-sm-2' type='text' placeholder='Search Graded Routes' aria-label='Search' />
              </div>
            </form> */}
          </div>
        </nav>
      </>
    )
  }
}

export default Header
