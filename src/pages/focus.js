import React from "react"

import Layout from "../components/layout"
import FocusStyle from "../styles/focus.module.scss"
import SEO from "../components/seo"
import {
  FaSuperpowers,
  FaCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaUserCircle,
} from "react-icons/fa"
import { MdAccessible } from "react-icons/md"

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
              <h3 className={FocusStyle.focusHeader}>Startup Support</h3>
              <p className={FocusStyle.focusText}>
                We provide conducive workspace for startups, access to talent,
                access to fellow entrepreneurs and investors. We also run
                Pre-incubation, incubation, and accelerator program at the hub.
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaCode className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>
                Software Development & Outsourcing
              </h3>
              <p className={FocusStyle.focusText}>
                We Design, build and manage both mobile, desktop and web
                applications.
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
                We run trainings, internships, and events focused on building
                and grooming the capacity of youths in the Niger Delta region.
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
                We help companies and organizations bring/launch their products,
                services or programs in the Niger Delta region.
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaProjectDiagram className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>
                Consulting & Project Implementation
              </h3>
              <p className={FocusStyle.focusText}>
                We give businesses, organizations, and companies expert advice
                on digital-related issues and solutions. We also help excute
                projects in the Niger Delta region for individuals and
                organizations.
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
                We run various social impact project here at the hub.
              </p>
            </div>
          </div>

          <div className={FocusStyle.card}>
            <div className={FocusStyle.cardIcon}>
              <FaChalkboardTeacher className={FocusStyle.focusIcon} />
            </div>
            <div className={FocusStyle.focusArea}>
              <h3 className={FocusStyle.focusHeader}>Workspace & Event Hall</h3>
              <p className={FocusStyle.focusText}>
                A space designed for you to get work done with steady power and
                fast Internet, and access to a community of like-minds. We also
                have various halls/rooms for meetings and events at the hub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AreasOfFocusPage
