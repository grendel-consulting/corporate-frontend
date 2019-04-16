import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import Box from '../Atoms/Box'
import Small from '../Atoms/Small'
import Postal from '../Molecules/Postal'

const textRegistration = ( company, region, registration ) => `${company} is registered in ${region}, with company number ${registration}. `

const Registration = () => (
  <StaticQuery
    query={graphql`
      query RegistrationQuery {
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
    render={ data => (
      <Box display="block" textAlign="center">
        <Small>
          { textRegistration( data.site.siteMetadata.corporate.name, data.site.siteMetadata.corporate.since, data.site.siteMetadata.corporate.reference )}
          <Postal/>
        </Small>
      </Box>
    )}
  />
)

Registration.propTypes = {
  className: PropTypes.string
}

export default Registration