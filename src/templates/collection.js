import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import _ from "lodash"

import style from "./collection.module.css" 
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import Video from "../components/video"


const CollectionIndex = ({data, pageContext}) => {
    const item = data.singleItem.edges;
    const collection = data.entireCollection.edges;
    // const { subject } = pageContext;
    

    return(
        <>
            <Layout>
                
                <div className={style.mainView}>
                  {item.map(({ node }, index )=> (
                      <>
                      <div className={style.mediaContainer}>
                          {/* {console.log(node.filmCoverImage)} */}
                          {/* <Img fixed={node.image.fixed} alt={node.description}/> */}
                          {node.filmEmbedLink != null && <Video className={style.videoFrame} videoSrcURL={node.filmEmbedLink} videoPlaceholderImage={node.filmCoverImage} />}
                          {node.image != null && <Img className={style.fluidImg} fluid={node.image.fluid} alt={node.description}  imgStyle={{objectFit: 'contain', 'height':'100%'}} />
                          }
                          {/* <Img className={style.fluidImg} fluid={node.image.fluid} alt={node.description} style={{'height':'92vh'}} imgStyle={{'margin':'50px', objectFit: 'contain', 'height':'100%'}} /> */}

                      </div>
                      <Pagination title={node.postTitle} description={node.description} year={node.year} pageContext={pageContext} />
                      </>
                  ))
                  }
                </div>
                <div className={style.mobileView}>
                  {collection.map(({ node }, index )=> (
                      <>
                      <div className={style.mediaItem} >
                        <div className={style.mobileMediaContainer}>
                            {/* <Img fixed={node.image.fixed} alt={node.description}/> */}
                            {/* <Img className={style.fluidImg} fluid={node.image.fluid} alt={node.description} style={{'height':'92vh'}} imgStyle={{'margin':'50px', objectFit: 'contain', 'height':'100%'}} /> */}
                            {node.filmEmbedLink != null && <Video className={style.videoFrame} videoSrcURL={node.filmEmbedLink} videoPlaceholderImage={node.filmCoverImage} />}
                            {node.image != null && <Img fluid={node.image.fluid} alt={node.description} style={{'height':'100%'}}  imgStyle={{objectFit: 'contain', 'height':'100%'}} /> }

                            
                          
                        </div>
                        <h2> {node.postTitle} | {node.description} | {node.year}</h2>
                       
                      </div>
                      
                      </>
                  ))
                  }
                </div>

                
                
            </Layout>
        </>
    )
}

export default CollectionIndex

export const query = graphql`
  query($subject: String!, $skip: Int!, $limit: Int!) {
        singleItem: allContentfulPost( sort: {fields: order} filter: {collection: {in: [$subject]}}
        skip: $skip
        limit: $limit
        ) {
          edges {
            node {
              description
              year
              postTitle
              collection
              slug
              filmEmbedLink
              filmCoverImage{
                id
                fluid(maxWidth: 1080 ) {
                  ...GatsbyContentfulFluid
               }
              }
              image {
                fixed {
                  height
                  srcSet
                  src
                  width
                }
                fluid(maxWidth: 1080 ) {
                  ...GatsbyContentfulFluid
               }
                
              }
            }
          }
        }
        entireCollection: allContentfulPost(filter: {collection: {in: [$subject]}}
          ) {
            edges {
              node {
                description
                year
                postTitle
                slug
                filmEmbedLink
                filmCoverImage{
                  id
                  fluid(maxWidth: 1080 ) {
                  ...GatsbyContentfulFluid
               }
              }
                image {
                  fixed {
                    height
                    srcSet
                    src
                    width
                  }
                  fluid(maxWidth: 1080 ) {
                    ...GatsbyContentfulFluid
                    }
                  
                }
              }
            }
          }
  }
  
`
