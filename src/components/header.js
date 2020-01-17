import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderStyle from "./header.module.scss"

const Header = ({ Logo, color}) => {
  const navColor = color === "#1f1f1f" ? HeaderStyle.navItemBlack : null
  return (
    <header>
      <nav className={HeaderStyle.nav}>
        <div className={HeaderStyle.logoContainer}>
          <Link to="/">
            <img className={HeaderStyle.logo} alt="WaffiiHub logo" src={Logo} />
          </Link>
        </div>
        <ul className={HeaderStyle.navList}>
          <li>
            <Link
              style={{ color }}
              className={HeaderStyle.navItem + " " + navColor}
              activeClassName={HeaderStyle.activeNavItem}
              to="/about"
            >
              Who We Are
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              style={{ color }}
              className={HeaderStyle.navItem + " " + navColor}
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
              style={{ color }}
              className={HeaderStyle.navItem + " " + navColor}
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
}

Header.propTypes = {
  Logo: PropTypes.string.isRequired,
  color: PropTypes.string
}

Header.defaultProps = {
  color: `#ffffff`,
}

export default Header
