import React from "react"
import {graphql, Link } from "gatsby"
import config from "../../gatsby-config"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"
import SEO from "../components/seo"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Blog = ({ data, pageContext, location }) => {
  const url = `${config.siteMetadata.siteUrl+location.pathname }`
  const post = data.markdownRemark
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={BlogStyle.container}>
        <div className={BlogStyle.postMetaInfo}>
          <h1>{post.frontmatter.title}</h1>
          <div>
            <h5>
              {post.frontmatter.date} . {post.timeToRead} min Read
            </h5>
          </div>
        </div>
        <div className={BlogStyle.socialIcons}>
          <a
            href={`mailto:?&body=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.email}
          >
            <MdEmail />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.facebook}
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/share?text=${post.frontmatter.title}&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.twitter}
          >
            <FaTwitter />
          </a>
          <a
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={BlogStyle.linkedin}
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className={BlogStyle.featuredImg}>
          <Img alt={post.frontmatter.imagedescription} fluid={post.frontmatter.featuredimage.childImageSharp.fluid} />
        </div>
        <div className={BlogStyle.blogPostBody}>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>

        <div className={BlogStyle.aboutAuthor}>
          <Img fixed={post.frontmatter.authorimage.childImageSharp.fixed} />
          <div className={BlogStyle.authorInfo}>
            <span>About the Author</span>
            <h3>{post.frontmatter.author}</h3>
            <p className={BlogStyle.description}>
              {post.frontmatter.authorrole ? post.frontmatter.authorrole : null}{" "}
              @Waffiihub
            </p>
          </div>
        </div>
      </div>
      <div className={BlogStyle.articleLinks}>
        {prev && (
          <Link to={`/blog/${prev.path}`}>
            prev <span>&larr;</span> {prev.title}
          </Link>
        )}
        {next && (
          <Link to={`/blog/${next.path}`}>
            next <span>&rarr; </span> {next.title}
          </Link>
        )}
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        path
        description
        date(formatString: "MMM Do, YYYY")
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imagedescription
        author
        authorrole
        authorimage {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`
