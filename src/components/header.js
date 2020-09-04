import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./header.module.css"

const Header = ({ siteTitle }) => (
    <div className={style.siteHeader}>
      <h1>
        <Link to="/" className={style.siteTitle}> {siteTitle} </Link>
      </h1>
    </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
