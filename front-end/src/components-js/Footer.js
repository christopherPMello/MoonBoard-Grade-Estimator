import React from "react"
import { Link } from "react-router-dom"

const scrollTopGuard = (topPos) => {
  window.scrollTo(0, 0)
}

const smoothScroll = (topPos) => {
  try {
    window.scroll({
      top: topPos !== undefined ? topPos : 0,
      left: 0,
      behavior: "smooth",
    })
  } catch (error) {
    // fallback for older browsers
    window.scrollTo(0, topPos !== undefined ? topPos : 0)
  }
}

const Footer = (props) => {
  return (
    <footer id="Footer-Con" className="border-top text-center small text-muted py-3">
      <p>
        <Link onClick={scrollTopGuard} className="mx-1 text-light" to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link onClick={scrollTopGuard} className="mx-1 text-light" to="/about">
          About
        </Link>{" "}
        {/* |{' '}
        <Link onClick={scrollTopGuard} className='mx-1 text-light' to='/login'>
          Login
        </Link> */}
      </p>
      <p className="m-0 text-light">
        <Link onClick={scrollTopGuard} to="/" className="text-light">
          MoonBoard Grade Estimator
        </Link>
      </p>
    </footer>
  )
}

export default Footer
export { scrollTopGuard, smoothScroll }
