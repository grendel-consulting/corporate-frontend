import styled from "styled-components"
import { color, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import ty from 'styled-tachyons';

const Small = styled.small`
  ${color}
  ${space}
  ${ty`f6 db tc`}
`;

Small.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
}

Small.defaultProps = {
  py: 1
}

export default Small