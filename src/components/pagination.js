import React from "react"
import { Link } from "gatsby"

import style from "./pagination.module.css"

const Pagination = ({ pageContext, title, description }) => {
  const { previousPagePath, nextPagePath } = pageContext
  
  return (
    <nav className={style.pagenav}>
      <div className={style.pagenav__item}>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className={style.buttonContainer}>
          <Link to={previousPagePath}> prev </Link>
          /
          <Link to={nextPagePath}>  next </Link>
        </div>
      </div>

    </nav>
  )
}

export default Pagination
