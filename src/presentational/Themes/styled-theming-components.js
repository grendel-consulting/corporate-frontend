/*
 * Inspired by Primer, https://primer.style/components/docs/system-props
 *  ... and Atoms-Molecules-etc
 */
import {
  compose,
  color, space,
  fontFamily, fontSize, fontStyle, fontWeight, lineHeight, textAlign,
  borders, borderColor, boxShadow, borderRadius,
  display, size, width, height, minWidth, minHeight, maxWidth, maxHeight, overflow, verticalAlign,
  position, zIndex, top, right, bottom, left,
  flexBasis, flexDirection, flexWrap, alignContent, alignItems, justifyContent, justifyItems, order,
  flex, justifySelf, alignSelf
} from 'styled-system';

export const commonStyles = compose( color, space )

export const typographyStyles = compose ( fontFamily, fontSize, fontStyle, fontWeight, lineHeight, textAlign )

export const borderStyles = compose ( borders, borderColor, boxShadow, borderRadius )

export const layoutStyles = compose ( display, size, width, height, minWidth, minHeight, maxWidth, maxHeight, overflow, verticalAlign )

export const positionStyles = compose ( position, zIndex, top, right, bottom, left )

export const flexContainerStyles = compose ( flexBasis, flexDirection, flexWrap, alignContent, alignItems, justifyContent, justifyItems, order )
export const flexItemStyles = compose ( flex, justifySelf, alignSelf )