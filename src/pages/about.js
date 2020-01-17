import React from "react"
import Layout from "../components/layout"
import AboutStyle from "../styles/about.module.scss"
import SEO from "../components/seo"

import { /*user2, user3, user4, user5, */ user6 } from "../images/team"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className={AboutStyle.container}>
      <section className={AboutStyle.aboutSection}>
        <h1>About Us</h1>
        <h5>
          WaffiiHub is an innovation center in Warri catalyzing innovations{" "}
          <br />
          and technologies with high growth potentials built by Africans to
          solve local or global problems.
        </h5>
      </section>

      <section className={AboutStyle.teamSection}>
        <h2>Meet the Team</h2>
        <div className={AboutStyle.teamContainer}>
          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/okoropaul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Paul Okoro</h3>
            <h6>CEO</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/Timothy_Ovie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/timothy-ovie-3237aa166/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Timothy Ovie</h3>
            <h6>the-PLUG/Co-Founder</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/synkode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/sinkopere-opuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Sink Opuba</h3>
            <h6>CTO</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Audrey Mukoro</h3>
            <h6>CFO</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Newton Ewhrudjakpor</h3>
            <h6>COO</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Amaju Ashon</h3>
            <h6>Social media Manager</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Mavino Michael</h3>
            <h6>Mobile Dev Lead</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Marvis Doe</h3>
            <h6>Design Lead</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Akpovwovwo Clara</h3>
            <h6>Customer Relations</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Flora Jane</h3>
            <h6>Mobile Developer</h6>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img className={AboutStyle.teamImg} alt="" src={user6} />
              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <h3>Ajiri Onaemo</h3>
            <h6>Sales Associate</h6>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default SecondPage
