import Typography from "typography"

import theme from "./Skald"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: theme.fontFamily['header'],
  bodyFontFamily: theme.fontFamily['body']
})

export default typography