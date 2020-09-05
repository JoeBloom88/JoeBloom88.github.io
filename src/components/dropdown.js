import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import _ from "lodash"
import uuid from "uuid"
import style from "./navigation.module.css"
// import style from  "./dropdown.module.css"

const Dropdown = ({items, activatorText}) => {
    
      // const [count, setCount] = useState(0);
      const[openState, setOpenState] = useState(false)
      
      const onButtonClick = () =>{

        

      }
      return (
        
        <nav className={style.navSmall}>
            <h1 role="button" aria-pressed={openState} className={style.dropDownTitle} onClick={()  => {setOpenState(!openState); onButtonClick();}}> {activatorText}</h1>
          {openState && <ul className={style.dropDownMenu}>
            {items.map((item) => (
                <li key={item.fieldValue}>
            <Link id={`${_.kebabCase(item.fieldValue)}`}  to={`/${_.kebabCase(item.fieldValue)}`} className={style.navItem}>{item.fieldValue}</Link>
          </li>
                ))}
            </ul>}
         
        </nav>
      );
    }


export default Dropdown