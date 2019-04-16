import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import styled from "styled-components"
import ty from 'styled-tachyons';

import Box from '../Atoms/Box'

const PolicyLink = styled(Link)`
  ${ty`f6 fw4 dib ph2 link dark-gray-blue dim`}
`

// TODO: css, before not last child add "|"
const Policies = ({ policies, className, ...props }) => (
  <Box mt={2} textAlign="center">
  {
    policies.map((policy, index) => (
      <PolicyLink key={index} to={policy.to} title={policy.title} activeClassName="fw6">{policy.title}</PolicyLink>
    ))
  }
</Box>
)

Policies.propTypes = {
  className: PropTypes.string
}

export default Policies

