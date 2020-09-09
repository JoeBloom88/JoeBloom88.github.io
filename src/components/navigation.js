import React, { useState } from "react"
import { Link } from "gatsby"
import _ from "lodash"
import Dropdown from './dropdown'

import style from "./navigation.module.css"

const MainNav = ({ menuLinks, externalLinks }) => {
  return (
    <>
    <nav className={style.navMain}>
      <ul>
        {menuLinks.map(props => (
          <li key={props.fieldValue}>
            <Link to={`/${_.kebabCase(props.fieldValue)}`} className={style.navItem}>{props.fieldValue}</Link>
          </li>
        ))}
        {externalLinks.map(props => (
          <li key={props.name}>
            <Link external to={props.url} className={style.navItem}>{props.name}</Link>
          </li>
        ))}
        <li key="about">
          <Link to={'/about'} className={style.navItem}>About</Link>
        </li>
      </ul>
    </nav>
    <Dropdown items={menuLinks} externalLinks={externalLinks} activatorText='menu'/>
    
    </>



    
  )
}

export default MainNav
