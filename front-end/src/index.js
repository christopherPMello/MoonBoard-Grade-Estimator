import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ReactDOM from "react-dom"

import Header from "./components-js/Header"
import Footer from "./components-js/Footer"
import About from "./components-js/About"
import Home from "./components-js/Home"
import Login from "./components-js/Login"
import Signup from "./components-js/Sign-up"
import "./index.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
