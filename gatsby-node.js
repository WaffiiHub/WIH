const path = require("path")

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          next {
            frontmatter {
              title
              path
            }
          }
          previous {
            frontmatter {
              title
              path
            }
          }
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path
    const next = edge.next ? edge.next.frontmatter : null
    const prev = edge.previous ? edge.previous.frontmatter : null
    actions.createPage({
      path: `blog/${path}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: {
        slug: path,
        prev,
        next,
      },
    })
  })
}
