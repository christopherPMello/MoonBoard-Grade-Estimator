import React from "react"

const Container = (props) => {
  return (
    <>
      <div className="sticky-top bg-white home-hidden-spacer"> </div>
      <div className={"container " + props.padding + " " + props.margin}>
        <div className="row no-gutters justify-content-md-center">{props.children}</div>
      </div>
    </>
  )
}

export default Container
