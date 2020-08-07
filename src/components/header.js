import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/header.scss"

const Header = () => (
  <header
    style={{
      background: `#20142f`,
    }}
  >
    <div className="link-container">
      <Link to="/" className="page-link" activeStyle={{ color: "gray" }}>
        Basic
      </Link>
      <Link to="/cube" className="page-link" activeStyle={{ color: "gray" }}>
        Cube
      </Link>
      <Link
        to="/scaleOut"
        className="page-link"
        activeStyle={{ color: "gray" }}
      >
        Scale out
      </Link>
      <Link to="/fall" className="page-link" activeStyle={{ color: "gray" }}>
        Fall
      </Link>
      <Link to="/foldOut" className="page-link" activeStyle={{ color: "gray" }}>
        Fold out
      </Link>
      <Link to="/open" className="page-link" activeStyle={{ color: "gray" }}>
        Open
      </Link>
      <Link to="/change" className="page-link" activeStyle={{ color: "gray" }}>
        Change
      </Link>
      <Link
        to="/autoPlay"
        className="page-link"
        activeStyle={{ color: "gray" }}
      >
        Auto play
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
