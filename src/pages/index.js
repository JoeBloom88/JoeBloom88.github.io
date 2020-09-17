import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({data}) => {
  const homeContent = data.homePageQuery.edges[0].node;
  return(
  <>
  <Layout>
    <SEO title="Home" />
    <div className={style.mediaContainer}>
      <video src={"https:"+ homeContent.film.file.url} loop muted autoPlay controls  > </video>
  </div>
    <div className={style.info}>
      <h1> {homeContent.title}   </h1>
      <h2> {homeContent.description} </h2>
      <h2> {homeContent.date} </h2>


    </div>
   
  </Layout>
  </>
  )
}

export default IndexPage


export const query = graphql`
  query {
    homePageQuery: allContentfulHomePage {
      edges {
        node {
          film {
            file {
              url
            }
          }
          date
          description
          title
        }
      }
    }
  }
  
`

