import styled from "styled-components"
import { commonStyles } from '../Themes/styled-theming-components'

const Em = styled.em`
  ${commonStyles}
`
Em.propTypes = {
  ...commonStyles.propTypes,
}

Em.defaultProps = {
  color: "secondary"
}

export default Em