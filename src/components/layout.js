/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import MainNav from "./navigation"

// Styles
import "../styles/global.module.css"
// import "/.cache\google-fonts\google-fonts.css"
// import "../fonts/fonts.css"

 import style from "./layout.module.css"
// import "./layout.css"

const Layout = ({ children}) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          menuLinks{
            name
            link
          }
        }
      }
    
      allContentfulPost {
        group(field: collection) {
          fieldValue
        }
      }
      externalLinksQuery: allContentfulExternalLink {
        nodes {
          name
          url
        }
      }
    }
    
  `)

  return (
    <>
      <div className={style.mainDiv}>
        <header>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainNav menuLinks={data.allContentfulPost.group} externalLinks={data.externalLinksQuery.nodes}/>
        </header>
        <main>{children}</main>
        <footer>
          <Footer siteTitle={data.site.siteMetadata.title}>  </Footer>
        </footer>
      </div> 
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
