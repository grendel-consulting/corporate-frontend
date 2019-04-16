import styled from "styled-components"
import { commonStyles } from '../Themes/styled-theming-components'
import ty from 'styled-tachyons';

const Small = styled.small`
  ${commonStyles}
  ${ty`f6 db tc`}
`;

Small.propTypes = {
  ...commonStyles.propTypes,
}

Small.defaultProps = {
  py: 1
}

export default Small