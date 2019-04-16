import React from 'react'
import PropTypes from 'prop-types'

import styled from "styled-components"
import { space, textAlign } from 'styled-system'
import ty from 'styled-tachyons';

import SEO from '../Organisms/Seo'
import Header from '../Organisms/Header'
import Footer from '../Organisms/Footer'

const Main = styled.main`
  ${space}
`

const Article = styled.article`
  ${space}
  ${textAlign}
  ${ty`center measure-wide f4 lh-copy`}
`

const Layout = ({ children, title }) => (
  <React.Fragment>
    <SEO title={title}/>
    <Header title={title} />
    <Main p={4} pt={2}>
      <Article px={2} textAlign="justify">
        { children }
      </Article>
    </Main>
    <Footer/>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
