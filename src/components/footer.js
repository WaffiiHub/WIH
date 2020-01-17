import React from "react"
import { Link } from "gatsby"
import Logo from "../images/waffiihub-logo-white.png"

import FooterStyle from "./footer.module.scss"
import ContactDetail from "./contactDetail"

const Footer = () => (
  <footer className={FooterStyle.container}>
    <div className={FooterStyle.footerSection}>
      <div className={FooterStyle.quickLinks}>
        <h3>Quick Links</h3>
        <ul className={FooterStyle.quickList}>
          <li className={FooterStyle.quickItem}>
            <Link to="/about">Who we are</Link>
          </li>
          <li className={FooterStyle.quickItem}>
            <Link to="/focus">What we do</Link>
          </li>

          <li className={FooterStyle.quickItem}>
            <Link to="/blog">Our blog</Link>
          </li>
        </ul>
      </div>
      <div className={FooterStyle.contactDetails}>
        <ContactDetail />
      </div>
    </div>
    <hr className={FooterStyle.hr} />
    <div className={FooterStyle.foot}>
      <img alt="waffiihub logo white" src={Logo} />
      <p className={FooterStyle.copyright}>
        copyright &copy; waffiihub 2020. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
