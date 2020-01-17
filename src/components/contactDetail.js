import React from "react"
import contactDetailStyle from "./contactDetail.module.scss"
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"

const ContactDetail = () => (
  <section className={contactDetailStyle.contactDetails}>
    <h2 className={contactDetailStyle.contactHeader}>Get in Touch</h2>
    <div className={contactDetailStyle.contactSocial}>
      <ul className={contactDetailStyle.socialIconList}>
        <li>
          <a
            style={{ color: "#1DA1F2" }}
            href="https://twitter.com/WaffiiHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            style={{ color: "#3A5895" }}
            href="#facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            style={{ color: "#CC0068" }}
            href="#instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />{" "}
          </a>
        </li>

        <li>
          <a
            style={{ color: "#0081F3" }}
            href="#linkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
    <div className={contactDetailStyle.contactInfo}>
      <ul>
        <li>
          <span>
            <MdEmail />
          </span>
          <a href="mailto:info@warriinnovationhub.com">
            info@warriinnovationhub.com
          </a>
        </li>
        <li>
          <span>
            <MdPhone />
          </span>
          <a href="tel:+2349016344696">+234-901-634-4696</a>
        </li>

        <li>
          <span>
            <MdLocationOn />
          </span>
          3rd floor, Isoken Plaza,
          <br />
          Enerhen Junction, Warri, Nigeria.
        </li>
      </ul>
    </div>
  </section>
)

export default ContactDetail
