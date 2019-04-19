import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from "gatsby"
import Box from '../Atoms/Box'

const Postal = () => (
  <StaticQuery
    query={graphql`
      query PostalQuery {
        site {
          siteMetadata {
            corporate {
              office
            }
          }
        }
      }
    `}
    render={data => (
      <Box display="inline" id="registered-office" className="vcard">Registered office:{" "}
        <Box display="inline" className="org">Grendel Consulting Limited</Box>{" "}
        <Box display="inline" className="adr">
          <Box display="inline" className="street-address">Venture House, Brookside Avenue</Box>{", "}
          <span className="locality">Rustington, Littlehampton</span>{", "}
          <span className="postal-code">BN16 3LF</span>{", "}
          <span className="country-name">United Kingdom</span>
        </Box>
      </Box>
    )}
  />
)

Postal.propTypes = {
  className: PropTypes.string
}

export default Postal

