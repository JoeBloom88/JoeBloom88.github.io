import React from "react"
import PropTypes from "prop-types"
import style from "./footer.module.css"

const Footer = ({ siteTitle }) => (
    <div className={style.siteFooter}>
      <h2>
      {siteTitle} &#x24B8;
      </h2>
    </div>
  
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
