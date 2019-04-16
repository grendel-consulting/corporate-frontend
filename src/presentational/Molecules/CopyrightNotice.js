import React from "react"
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from "gatsby"

import Box from '../Atoms/Box'
import Small from '../Atoms/Small'

const textCopyright = ( holder, from, to ) => `© ${from}-${to} ${holder}. All Rights Reserved`
const to = new Date().getFullYear();

const CopyrightNotice = () => (
  <StaticQuery
    query={graphql`
      query CopyrightNoticeQuery {
        site {
          siteMetadata {
            corporate {
              name
              since
              reference
            }
          }
        }
      }
    `}
    render={data => (
      <Box display="block" textAlign="center">
        <Small>{textCopyright( data.site.siteMetadata.corporate.name, data.site.siteMetadata.corporate.since, to )}</Small>
      </Box>
    )}
  />
)

CopyrightNotice.propTypes = {
  className: PropTypes.string
}

export default CopyrightNotice