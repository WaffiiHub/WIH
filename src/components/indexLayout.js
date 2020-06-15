
import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import Logo from "../images/waffiihub-logo-white.png"
import layoutStyles from "./indexLayout.module.scss"

const IndexLayout = ({ children }) => {
  return (
    <>
      <div className={layoutStyles.container}>
        <Navigation />
        <Header Logo={Logo} />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout;
