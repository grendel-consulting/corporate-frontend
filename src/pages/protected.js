import React from "react"
import { Router } from "@reach/router"
import {
  login,
  logout,
  isAuthenticated,
  getProfile,
} from "../utils/Authentication"
import { Link } from "gatsby"

import Page from "../containers/Environments/Page"
import Layout from "../presentational/Ecosystems/Layout"
import Para from "../presentational/Atoms/Para"

const Settings = () => <Para>Settings</Para>
const Billing = () => <Para>Billing</Para>

const Protected = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Page>
      <Layout title="Protected">
        <nav>
          <Link to="/protected/">Protected</Link>{" "}
          <Link to="/protected/settings/">Settings</Link>{" "}
          <Link to="/protected/billing/">Billing</Link>{" "}
          <a
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            Log Out
          </a>
        </nav>
        <pre>{JSON.stringify(user, null, 2)}</pre>{" "}
        <p>Content behind the wall</p>
        <Router>
          <Settings path="/protected/settings" />
          <Billing path="/protected/billing" />
        </Router>
      </Layout>
    </Page>
  )
}

export default Protected
