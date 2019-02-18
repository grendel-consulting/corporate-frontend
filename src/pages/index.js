import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article className="mt4 f4">
      <p>We are a boutique consultancy providing interim, advisory services in the areas of innovation, product and technology management and development, digital platforms, and cyber security.</p>
      <p>We work with experienced founders and managers as well as those just starting out in leadership roles, bringing a range of experience in top tier enterprises and early stage statups.</p>
      <p>We operate as a 'force multiplier', whether that be through: providing a capability where you have a gap; delivery of coaching, mentoring or workshops to enhance your existing team; or supporting them to deliver a step-change to your business.</p>
    </article>
  </Layout>
)

export default IndexPage
