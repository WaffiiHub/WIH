import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import Logo from "../images/waffiihub-logo.png"
import layoutStyles from "./layout.module.scss"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className={layoutStyles.container}>
        <Navigation />
        <Header Logo={Logo} color="#1f1f1f" />
        <div>
          <main>{children}</main>
        </div>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
