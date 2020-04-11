import React from "react"
import {Helmet} from "react-helmet"

import { handleAuthentication } from "../utils/Authentication"

import Page from "../containers/Environments/Page"
import Layout from "../presentational/Ecosystems/Layout"
import Para from "../presentational/Atoms/Para"

const CallbackPage = props => {
  handleAuthentication()

  return (
    <Page>
      <Helmet>
        <meta http-equiv="refresh" content={`0;url=http://localhost:8000`} />
      </Helmet>
      <Layout title="Login...">
        <Para>...redirecting</Para>
      </Layout>
    </Page>
  )
}
export default CallbackPage
