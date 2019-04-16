import React from "react"

import Page from "../containers/Environments/Page"
import Layout from "../presentational/Ecosystems/Layout"
import Para from "../presentational/Atoms/Para"
import Strong from "../presentational/Atoms/Strong"
import Em from "../presentational/Atoms/Em"

const IndexPage = () => (
  <Page>
    <Layout title="Grendel Consulting">
      <Para mb={3}>
        We are a <Strong>boutique consultancy</Strong> providing{" "}
        <Em>interim</Em>, <Em>advisory services</Em> in the areas of{" "}
        <Em>innovation</Em>, <Em>product and technology management</Em> and
        development, <Em>digital platforms</Em>, and <Em>cyber security</Em>.
      </Para>
      <Para mb={3}>
        We work with experienced founders and managers as well as those just
        starting out in leadership roles, bringing a{" "}
        <Strong>range of experience</Strong> in top tier enterprises and early
        stage statups.
      </Para>
      <Para mb={3}>
        We operate as a <Strong>force multiplier</Strong>, whether that be
        through: providing a <Em>capability</Em> where you have a gap; delivery
        of <Em>coaching</Em>, <Em>mentoring</Em> or <Em>workshops</Em> to
        enhance your existing team; or supporting them to{" "}
        <Em>deliver a step-change</Em> to your business.
      </Para>
    </Layout>
  </Page>
)

export default IndexPage
