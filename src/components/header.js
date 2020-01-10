// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import Logo from "../images/waffiihub-logo-white.png"
import HeaderStyle from "./header.module.scss"

const Header = () => (
  <header>
    <nav className={HeaderStyle.nav}>
      <div style={{ padding: "2rem" }}>
        <Link to="/">
          <img className={HeaderStyle.logo} alt="WaffiiHub logo" src={Logo} />
        </Link>
      </div>
      <ul className={HeaderStyle.navList}>
        <li>
          <Link
            className={HeaderStyle.navItem}
            activeClassName={HeaderStyle.activeNavItem}
            to="/about"
          >
            Who We Are
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            className={HeaderStyle.navItem}
            activeClassName={HeaderStyle.activeNavItem}
            to="/focus"
          >
            {" "}
            What We do{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={HeaderStyle.navItem}
            activeClassName={HeaderStyle.activeNavItem}
            to="/blog"
          >
            {" "}
            Blog{" "}
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
