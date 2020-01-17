import React from "react"
import { startupSupport } from "../images/focus"

import Layout from "../components/layout"
import FocusStyle from "../styles/focus.module.scss"
import SEO from "../components/seo"
import { FaSuperpowers, FaCode, FaChalkboardTeacher, FaProjectDiagram, FaUserCircle } from "react-icons/fa"
import { MdBuild, MdAccessible } from "react-icons/md"

const AreasOfFocusPage = () => (
  <Layout>
    <SEO title="Our Focus" />
    <div className={FocusStyle.container}>
      <h2 className={FocusStyle.header}>
        {" "}
        We help to catalyze Africa's next generation innovations.
      </h2>
      <section className={FocusStyle.mainSection}>
        <h3 className={FocusStyle.mainSectionHeader}>Areas of Focus</h3>
        <div className={FocusStyle.cardContainer}>
          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaSuperpowers className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>We Support Startups</h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaCode className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>
                Software Development and Outsourcing
              </h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaChalkboardTeacher className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>Capacity building</h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <MdAccessible className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>Market Entry</h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaProjectDiagram className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>Consulting and Project Implementation</h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaUserCircle className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>Social Impact</h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaChalkboardTeacher className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>WorkSpace Rental</h3>
              <p className={FocusStyle.focusText}>
                Duis sint elit minim magna aute ipsum amet tempor enim eu dolore
                reprehenderit. Cillum excepteur pariatur culpa eu excepteur
                irure. Elit pariatur anim irure cillum ullamco laborum sit
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  </Layout>
)

export default AreasOfFocusPage
