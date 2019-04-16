import React from 'react'
import PropTypes from 'prop-types'

import styled from "styled-components"
import { space, textAlign, color } from 'styled-system'

import CopyrightNotice from '../Molecules/CopyrightNotice'
import Registration from '../Molecules/Registration'
import Policies from '../Molecules/Policies'

const Boilerplate = styled.footer`
  ${space}
  ${textAlign}
  ${color}
`

const Footer = ({ className, ...props }) => (
  <Boilerplate px={[3, 4, 5]} py={3} color="#555" bg="#f4f4f4">
    <CopyrightNotice />
    <Registration />
    <Policies policies={[
      { to: "/about/",   title: "About Us" },
      { to: "/terms/",   title: "Terms of Use" },
      { to: "/privacy/", title: "Privacy" },
      { to: "/colophon/", title: "Colophon" },
    ]}/>
  </Boilerplate>
)

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer