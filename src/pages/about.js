import React from "react"
import { Link } from "gatsby"
import { FaTwitter } from "react-icons/fa"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Hi from the second page <span style={{color: "red"}}><FaTwitter size="1.3rem" /></span></h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
