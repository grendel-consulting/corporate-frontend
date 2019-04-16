import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import ty from 'styled-tachyons';

import Icon from '../Atoms/Icon'

const NavContainer = styled.div`
  ${ty`dt w-100 mw9 center`}
`

const NavBar = styled.nav`
  ${ty`dtc v-mid tc pa3`}
`
const NavLink = styled(Link)`
  ${ty`no-underline`}
`

const NavTitle = styled.h1`
  ${ty`db v-mid mv4 pa1 f1 f-headline-l fw3 dark-blue`}
`
const Header = ({ title }) => (
  <header>
    <NavContainer className="">
      <NavBar className="">
        <Icon/>
        <NavLink to="/" className="no-underline"><NavTitle className=" ">{title}</NavTitle></NavLink>
      </NavBar>
     </NavContainer>
   </header>
 )

// TODO: PropTypes

Header.defaultProps = {
  title: "Untitled Page"
}

export default Header
