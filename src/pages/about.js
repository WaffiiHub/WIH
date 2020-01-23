import React from "react"
import Layout from "../components/layout"
import AboutStyle from "../styles/about.module.scss"
import SEO from "../components/seo"

import { clara, audreyFunny } from "../images/team"

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
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771891/waffiihubteam/teamPics/paul_t28qni.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771829/waffiihubteam/teamPics/paulFunny_ykoogi.jpg"
              />

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
                  href="https://www.linkedin.com/in/okoropaul/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div
              className={
                AboutStyle.teamMemberDetails + " " + AboutStyle.textColor
              }
            >
              <h3>Paul Okoro</h3>
              <h4>Founder/CEO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771945/waffiihubteam/teamPics/tim_do2tmv.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771929/waffiihubteam/teamPics/timFunny_wzcw0g.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Timothy Ovie</h3>
              <h4>Co-Founder/Marketing & Comms</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771918/waffiihubteam/teamPics/sink_e3yqlw.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771885/waffiihubteam/teamPics/sinkFunny_ntklis.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Sinkopere Opuba</h3>
              <h4>CTO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771603/waffiihubteam/teamPics/audrey_ujqkup.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771562/waffiihubteam/teamPics/audreyFunny_ozmwmv.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/audrey_mukoro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://ng.linkedin.com/in/audrey-mukoro-a3130b192"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Audrey Mukoro</h3>
              <h4>CFO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771757/waffiihubteam/teamPics/newton_fybker.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771765/waffiihubteam/teamPics/newtonFunny_wowech.jpg"
              />

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
            <div
              className={
                AboutStyle.teamMemberDetails + " " + AboutStyle.textColor
              }
            >
              <h3>Newton Ewhrudjakpor</h3>
              <h4>COO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771693/waffiihubteam/teamPics/austin_r6qkkq.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771646/waffiihubteam/teamPics/austinFunny_jithxj.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Austin K. Ngwu</h3>
              <h4>Legal Advisor</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579769785/waffiihubteam/teamPics/funny_cajz8f.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579769770/waffiihubteam/teamPics/marvinoFunny_cfcxnj.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Mavino Michael</h3>
              <h4>Mobile Dev Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src={audreyFunny}
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src={audreyFunny}
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#linkedin"
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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Amaju Ashon</h3>
              <h4>Media Manager</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771799/waffiihubteam/teamPics/okoro_qowyth.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771816/waffiihubteam/teamPics/okoroFunny_jxg0zf.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/audrey_mukoro"
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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Ejevwoke Ikuiagbe</h3>
              <h4>HR</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771804/waffiihubteam/teamPics/efiri_rdyciq.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579769644/waffiihubteam/teamPics/efiriFunny_jxx8vs.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Dr Tamaradeinyefa Efiri</h3>
              <h4>Social Impact Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src={audreyFunny}
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src={audreyFunny}
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Marvis Ofure</h3>
              <h4>Design Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579769684/waffiihubteam/teamPics/floraFunny_r16efc.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579769674/waffiihubteam/teamPics/flora_bytovk.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Flora Owhiroro</h3>
              <h4>Android Developer</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771761/waffiihubteam/teamPics/mercy_gvgfal.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771816/waffiihubteam/teamPics/mercyFunny_t4wuzt.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Mercy</h3>
              <h4>Media Associate</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src={clara}
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579769515/waffiihubteam/teamPics/claraFunny_v8xp9p.jpg"
              />

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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Clara Akpovwovwo</h3>
              <h4>Customer Relations</h4>
            </div>
          </div>
          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771625/waffiihubteam/teamPics/ajiri_krhbkl.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579771573/waffiihubteam/teamPics/ajiriFunny_pcscmd.jpg"
              />

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
            <div
              className={
                AboutStyle.teamMemberDetails + " " + AboutStyle.textColor
              }
            >
              <h3>Ajiri Onaemo</h3>
              <h4>Sales Associate</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default SecondPage
