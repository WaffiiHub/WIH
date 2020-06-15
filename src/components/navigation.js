import React from "react"
import "./navigation.scss"
import { Link } from "gatsby"
import ContactDetail from "./contactDetail"

const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>
    <div className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/about">Who We Are</Link>
        </li>
        <li className="navigation__item">
          <Link to="/focus">What We do</Link>
        </li>
        <li className="navigation__item">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <div className="navigation__contact">
        <ContactDetail />
      </div>
    </div>
  </div>
)

export default Navigation
