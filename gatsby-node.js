/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)



exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    // Query all the data
    const queryResult = await graphql(`
      {
        postQuery: allContentfulPost {
            group(field: collection) {
              fieldValue
              nodes {
                id
              }
            }
          }
      }
    `)
    if (queryResult.errors) {
      reporter.panic("error loading events", queryResult.errors)
      return
    }
  
    // // Generate single post pages
    // const posts = queryResult.data.postQuery.edges
    // posts.forEach(post => {
    //   createPage({
    //     path: post.node.fields.slug,
    //     component: path.resolve(`./src/templates/article.js`),
    //     context: {
    //       // Data passed to context is available
    //       // in page queries as GraphQL variables.
    //       slug: post.node.fields.slug,
    //     },
    //   })
    // })
  
    // Create your paginated pages
    // paginate({
    //   createPage, // The Gatsby `createPage` function
    //   items: posts, // An array of objects
    //   itemsPerPage: 2, // How many items you want per page
    //   pathPrefix: "/articles", // Creates pages like `/blog`, `/blog/2`, etc
    //   component: path.resolve(`./src/templates/articles.js`), // Just like `createPage()`
    // })
  
    const  collectionsArray = queryResult.data.postQuery.group
    collectionsArray.map(({ nodes: nodes, fieldValue: fieldValue }) => {
      paginate({
        createPage, // The Gatsby `createPage` function
        items: nodes, // An array of objects
        itemsPerPage: 1, // How many items you want per page
        pathPrefix: `/${_.kebabCase(fieldValue)}`, // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve(`./src/templates/collection.js`), // Just like `createPage()`
        context: { subject: fieldValue },
      })
    })
  }
  