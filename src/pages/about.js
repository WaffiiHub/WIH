import React from "react"
import Layout from "../components/layout"
import AboutStyle from "./about.module.scss"
import SEO from "../components/seo"

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
          <div className={AboutStyle.teamMember} id="paul">
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209576/team/paul_vr2zod.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209588/team/paulFunny_wqgwyn.jpg"
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
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Paul Okoro</h3>
              <h4>Founder/CEO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209588/team/tim_okopno.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209585/team/timFunny_mczhti.jpg"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581791542/team/sink_bmmpha.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209580/team/sink_t8amhs.jpg"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209545/team/audrey_butnxa.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209543/team/audreyFunny_uuchht.jpg"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209577/team/newton_gd6fcn.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209607/team/newtonFunny_mhhmmc.jpg"
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
              style={{ color: "#7c7777" }}
              className={AboutStyle.teamMemberDetails}
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209540/team/austin_xek1yh.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209534/team/austinFunny_uj5hky.jpg"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209569/team/mavino_nt3tww.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209571/team/mavinoFunny_vwhw6j.jpg"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581106803/team/amaju_jjggxr.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581106805/team/amajuFunny_rdilxv.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/amatwits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/amajuoritse-ashon-76679330"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581106807/team/jamin_rzsqqp.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581106804/team/jaminFunny_eyg1zk.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/codekyd"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/trust-jamin-2365b6147/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Jamin Okpukoro</h3>
              <h4>Web Dev Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209570/team/okoro_alem7o.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209578/team/okoroFunny_crvgfj.jpg"
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
              <h3>Ejevwoke Ikuiagbe</h3>
              <h4>HR</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209556/team/efiri_mq0ep3.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209547/team/efiriFunny_h1sbah.jpg"
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
              <h3 className={AboutStyle.pl}>Tamaradeinyefa Efiri</h3>
              <h4>Social Impact Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581106801/team/marvis_ynlo5d.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1581106802/team/marvisFunny_kslutp.jpg"
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
              <h3>Marvis Ighedosa</h3>
              <h4>Design Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209556/team/floraFunny_tn7ybe.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209561/team/flora_ypw2dc.jpg"
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
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209568/team/mercy_dpvgyw.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209567/team/mercyFunny_nzwg6f.jpg"
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
              <h3>Mercy Oyebade</h3>
              <h4>Media Associate</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209541/team/clara_xnrpmr.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209550/team/claraFunny_ja0wdp.jpg"
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
              <h3 className={AboutStyle.pl}>Clara Akpovwovwo</h3>
              <h4>Customer Relations</h4>
            </div>
          </div>
          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209542/team/ajiri_sgyhvz.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1580209546/team/ajiriFunny_c048i5.jpg"
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
