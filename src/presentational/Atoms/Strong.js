import styled from "styled-components"
import { commonStyles } from '../Themes/styled-theming-components'

const Strong = styled.strong`
  ${commonStyles}
  color: ${props => props.theme.colors.softOrange};
  font-weight:bold
`
Strong.propTypes = {
  ...commonStyles.propTypes,
}

export default Strong