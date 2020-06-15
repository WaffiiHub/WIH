import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import NotFound from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={NotFound.header}>
      <h1>Page Not Found</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.{" "}
        <Link to="/">Head home</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
