//import theme from 'styled-theming'

let theme = {
  colors: {
    darkestBlue: "#104378",
    darkerBlue: "#145593",
    darkBlue: "#165EA0",
    strongBlue: "#1B70BB",
    brightBlue: "#2491EB",
    darkGrayBlue: "#425059",
    softBlue: "#6DB7F2",
    softOrange: "#e86f10", // RANDOM DARK ORANGE
  },
  space: [
    0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'
  ],
  fontFamily: {
    body: [ "Open Sans", "sans-serif," ],
    header: [ "Avenir Next", "Avenir", "sans-serif" ],
  },
}

theme.colors.primary = theme.colors["darkGrayBlue"]
theme.colors.secondary = theme.colors["darkBlue"]

export default theme