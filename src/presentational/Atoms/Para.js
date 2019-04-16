import styled from "styled-components"
import { commonStyles } from '../Themes/styled-theming-components'

const Para = styled.p`
  ${commonStyles}
`
Para.propTypes = {
  ...commonStyles.propTypes,
}

Para.defaultProps = {
  color: "primary"
}
export default Para