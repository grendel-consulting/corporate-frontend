/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { checkSession } from "./src/utils/Authentication"

class SessionCheck extends React.Component {
  state = {
    loading: true,
  }

  construct() {
    this.handleCheckSession = this.handleCheckSession.bind(this)
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentWillMount() {
    checkSession(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}