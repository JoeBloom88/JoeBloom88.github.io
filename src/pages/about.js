import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import _ from "lodash"

import style from "./about.module.css" 
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import Pagination from "../components/pagination"
// import Video from "../components/video"


const AboutPage = ({data, pageContext}) => {
    const aboutContent = data.aboutPageQuery.nodes[0]
    return(
        <>
            <Layout>
              
              <div className={style.container}>
                  <div className={style.imgContainer}>
                    <Img fluid={aboutContent.image.fluid} alt={aboutContent.title} style={{'height':'100%'}}  imgStyle={{objectFit: 'contain', 'height':'100%'}} /> 
                  </div>
                  {documentToReactComponents(aboutContent.text.json)} 
              </div>
              <div className={style.contactDetails}>
                {documentToReactComponents(aboutContent.contact.json)}
              </div>
            </Layout>
        </>
    )
}

export default AboutPage

export const query = graphql`
  query {
    aboutPageQuery: allContentfulAboutPage {
        nodes {
          title
          image {
            fluid(maxWidth: 1080 ) {
              ...GatsbyContentfulFluid
           }
          }
          contact {
            json
          }
          text {
            json
          }
        }
      }
  }
  
`
