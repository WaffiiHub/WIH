import React from "react"

import IndexLayout from "../components/indexLayout"
import SEO from "../components/seo"
import ContactDetail from "../components/contactDetail"
import IndexStyle from "../styles/index.module.scss"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <div className={IndexStyle.container}>
      <section className={IndexStyle.mainSection}>
        <h1 className={IndexStyle.headerText}>
          Enabling <br />
          Innovative <br />
          Entrepreneurs <br /> in the Niger Delta
        </h1>
      </section>
      <section className={IndexStyle.contactSection}>
        <ContactDetail />
      </section>
    </div>
  </IndexLayout>
)

export default IndexPage
