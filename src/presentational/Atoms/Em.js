import styled from "styled-components"
import { color, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Em = styled.em`
  ${color}
  ${space}
`
Em.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
}

Em.defaultProps = {
  color: "secondary"
}

export default Em