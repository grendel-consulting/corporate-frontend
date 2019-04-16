import styled from "styled-components"
import { commonStyles, typographyStyles, layoutStyles } from '../Themes/styled-theming-components'

const Box = styled.div`
  ${commonStyles}
  ${typographyStyles}
  ${layoutStyles}
`;

Box.propTypes = {
  ...commonStyles.propTypes,
  ...typographyStyles.propTypes,
  ...layoutStyles.propTypes,
}

Box.defaultProps = {
  display: "block"
}
export default Box