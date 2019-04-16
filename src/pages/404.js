import React from "react"

import { Link } from "gatsby"

import Page from "../containers/Environments/Page"
import Layout from "../presentational/Ecosystems/Layout"
import Para from "../presentational/Atoms/Para"

const NotFoundPage = () => (
  <Page>
    <Layout>
      <h1>Not Found</h1>
      <Para>
        You've wandered off the beaten track; how can we help you find{" "}
        <Link
          to="/"
          activeClassName="fw6"
          className="fw4 dib ph2 link dark-gray-blue dim"
        >
          the way home
        </Link>
        ?
      </Para>
    </Layout>
  </Page>
)

export default NotFoundPage
