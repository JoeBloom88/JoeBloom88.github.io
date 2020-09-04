import React, { useState } from "react"
import { Link } from "gatsby"
import _ from "lodash"
import Dropdown from './dropdown'

import style from "./navigation.module.css"

const MainNav = ({ menuLinks }) => {
  return (
    <>
    <nav className={style.navMain}>
      <ul>
        {menuLinks.map(props => (
          <li key={props.fieldValue}>
            <Link to={`/${_.kebabCase(props.fieldValue)}`} className={style.navItem}>{props.fieldValue}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Dropdown items={menuLinks} activatorText='menu'/>
    
    </>



    
  )
}

export default MainNav
