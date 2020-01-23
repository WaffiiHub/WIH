import React from "react"

import Layout from "../components/layout"
import FocusStyle from "../styles/focus.module.scss"
import SEO from "../components/seo"

const blogPage = () => (
  <Layout>
    <SEO title="Our Focus" />
    <div className={FocusStyle.container}>
      <h2 className={FocusStyle.header}> Nothing here yet. Coming Soon!!</h2>
    </div>
  </Layout>
)

export default blogPage
