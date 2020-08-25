import React, { useEffect } from "react"
import Container from "./Container"

const Page = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
    document.title = props.title ? `${props.title} | MoonBoard Grade Estimator` : "MGE | MoonBoard Grade Estimator"
  }, [])
  return (
    <>
      {!props.noContainer && (
        <Container padding={props.padding} margin={props.margin}>
          {props.children}
        </Container>
      )}
      {props.noContainer && <div>{props.children}</div>}
    </>
  )
}

export default Page
