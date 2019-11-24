import styled from "styled-components"
import { color, space, typography, layout } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Box = styled.div`
  ${color}
  ${space}
  ${typography}
  ${layout}
`;

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.layout,
}

Box.defaultProps = {
  display: "block"
}
export default Box