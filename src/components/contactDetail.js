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
            href="https://www.facebook.com/warriinnovationhub/"
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Warri+Innovation+Hub/@5.5300747,5.7717313,17z/data=!4m25!1m19!4m18!1m9!2m2!1d5.7826606!2d5.5440522!3m4!1m2!1d5.7752192!2d5.529821!3s0x1041b27ef317b31f:0x5a79579a6b98173b!4e1!1m6!1m2!1s0x1041b36023a3e9ad:0x8431eccdd7bd5ab7!2swarri+innovation+hub!2m2!1d5.7720592!2d5.5272815!3e0!3m4!1s0x1041b36023a3e9ad:0x8431eccdd7bd5ab7!8m2!3d5.5272815!4d5.7720592"
          >
            <span>
              <MdLocationOn />
            </span>
            3rd floor, Isoken Plaza,
            <br />
            Enerhen Junction, Warri, Nigeria.
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default ContactDetail
