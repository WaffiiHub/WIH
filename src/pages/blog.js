import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"
import SEO from "../components/seo"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query postQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(fromNow: true)
              path
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              imagedescription
              tag
            }
            excerpt(pruneLength: 108)
          }
        }
      }
    }
  `)
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={BlogStyle.container}>
        <div className={BlogStyle.blogHeader}>
          <h1> NEWS AND INSIGHTS</h1>
        </div>

        <div className={BlogStyle.blogPostsContainer}>
          {edges.map((edge, index) => {
            return (
              <div key={index} className={BlogStyle.blogPost}>
                <Link to={`/blog/${edge.node.frontmatter.path}`}>
                  <Img alt={edge.node.frontmatter.imagedescription} fluid={edge.node.frontmatter.featuredimage.childImageSharp.fluid}/>
                  <span className={BlogStyle.blogTag}>
                    {edge.node.frontmatter.tag}
                  </span>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.excerpt}</p>
                  <span>{edge.node.frontmatter.date}</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
