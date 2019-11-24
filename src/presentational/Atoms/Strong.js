import styled from "styled-components"
import { color, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Strong = styled.strong`
  ${color}
  ${space}
  color: ${props => props.theme.colors.softOrange};
  font-weight:bold
`
Strong.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
}

export default Strong