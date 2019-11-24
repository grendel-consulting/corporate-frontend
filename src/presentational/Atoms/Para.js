import styled from "styled-components"
import { color, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Para = styled.p`
  ${color}
  ${space}
`
Para.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
}

Para.defaultProps = {
  color: "primary"
}
export default Para