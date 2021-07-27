import { Scale } from "@theme-ui/css/src/types"
import * as CSS from "csstype"
import { ColorModesScale, Theme } from "theme-ui"
import {
  Colors,
  MediaQuery,
  ScreenBreakpoint,
  SpaceAlias,
  Variants,
} from "./theme.types"

const space: Array<number | string> = [
  0,
  "0.25em",
  "0.5em",
  "1em",
  "1.5em",
  "2em",
  "2.5em",
  "3em",
  "3.5em",
  "4em",
  "4.5em",
]

const spaceAlias: SpaceAlias = {
  none: space[0],
  xxs: space[1], // 4px
  xs: space[2], // 8px
  sm: space[3], // 16px
  md: space[4], // 24px
  lg: space[5], // 32px
  xl: space[6], // 40px
  xxl: space[7], // 48px
  xxxl: space[8], // 56px
  xxxxl: space[9], // 64px
  xxxxxl: space[10], // 72px
}

/*
  Styled system's first breakpoint is implicit 0.

  Also they require every breakpoint to be a css string with size unit (px, em, ...).
  Unfortunately this is not documented in the official docs - but now we documented it here!
 */
const breakpoints = ["600px", "960px", "1280px", "1920px"]
export interface CommonBreakpoints {
  px360: string
  px400: string
}
const commonBreakpoints: CommonBreakpoints = {
  px360: "360px",
  px400: "400px",
}

// Read docblock above const breakpoints's declaration to see why we need to set 0 literally with unit and the others dynamically without.
const mediaQueries: MediaQuery = {
  xs: `(min-width: 0px)`,
  sm: `(min-width: ${breakpoints[0]})`,
  md: `(min-width: ${breakpoints[1]})`,
  lg: `(min-width: ${breakpoints[2]})`,
  xl: `(min-width: ${breakpoints[3]})`,
}

// Read docblock above const breakpoints's declaration to see why we need to use parseInt and set 0 literally
const screenBreakpoint: ScreenBreakpoint = {
  xs: 0,
  sm: parseInt(breakpoints[0], 10),
  md: parseInt(breakpoints[1], 10),
  lg: parseInt(breakpoints[2], 10),
  xl: parseInt(breakpoints[3], 10),
}

const colorPalette: Colors = {
  grey: {
    default: "#f0f0f0",
    hover: "#f6f6f6",
  },
  midGrey: {
    default: "#dedede",
    hover: "#efefef",
  },
  lightGrey: {
    default: "#8e8e8e",
    hover: "#9f9f9f",
  },
  darkGrey: {
    default: "#282828",
    hover: "#393939",
  },
  green: {
    default: "#28A858",
    hover: "#49DB80",
  },
  blue: {
    default: "#4a90e2",
    hover: "#5ba1f3",
  },
  seagreen: {
    default: "#1f9e93",
    hover: "#2fafa4",
  },
  yellow: {
    default: "#f9d026",
    hover: "#faf147",
  },
  orange: {
    default: "#f5a623",
    hover: "#f6b734",
  },
  white: {
    default: "#ffffff",
    hover: "#efefef",
  },
  anthracite: {
    default: "#282828",
    hover: "#1d1d1d",
  },
  black: {
    default: "#000000",
    hover: "#1d1d1d",
  },
}

const colors: ColorModesScale = {
  text: colorPalette.black.default,
  background: colorPalette.white.default,
  primary: colorPalette.grey.default,
}

const variants: Variants = {
  primary: {
    default: colorPalette.grey.default,
    hover: colorPalette.grey.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.grey.default,
    outlineTextHover: colorPalette.grey.hover,
  },
  secondary: {
    default: colorPalette.midGrey.default,
    hover: colorPalette.midGrey.hover,
    text: colorPalette.darkGrey.default,
    textHover: colorPalette.darkGrey.hover,
    outlineText: colorPalette.darkGrey.default,
    outlineTextHover: colorPalette.darkGrey.hover,
  },
  success: {
    default: colorPalette.green.default,
    hover: colorPalette.green.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.green.default,
    outlineTextHover: colorPalette.green.hover,
  },
  danger: {
    default: colorPalette.grey.default,
    hover: colorPalette.grey.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.grey.default,
    outlineTextHover: colorPalette.grey.hover,
  },
  warning: {
    default: colorPalette.orange.default,
    hover: colorPalette.orange.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.orange.default,
    outlineTextHover: colorPalette.orange.hover,
  },
  info: {
    default: colorPalette.blue.default,
    hover: colorPalette.blue.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.blue.default,
    outlineTextHover: colorPalette.blue.hover,
  },
}

const fontSizes: Array<string> = [
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "26px",
  "38px",
]

const fonts: Array<string> = ["Roboto"]
const fontWeights: Scale<CSS.Property.FontWeight> = {
  light: 300,
  regular: 400,
  bold: "bold",
}
const lineHeights: Array<number | string> = [
  "23px",
  "25px",
  "26px",
  "29px",
  "33px",
  "36px",
  "50px",
]

const sizes: Array<number | string> = [
  0,
  (1 / 12) * 100 + "%",
  (2 / 12) * 100 + "%",
  (3 / 12) * 100 + "%",
  (4 / 12) * 100 + "%",
  (5 / 12) * 100 + "%",
  (6 / 12) * 100 + "%",
  (7 / 12) * 100 + "%",
  (8 / 12) * 100 + "%",
  (9 / 12) * 100 + "%",
  (10 / 12) * 100 + "%",
  (11 / 12) * 100 + "%",
  (12 / 12) * 100 + "%",
]

const theme: Theme = {
  baseFontSize: fontSizes[1], // 16px
  colors,
  colorPalette,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  space,
  spaceAlias,
  variants,
  breakpoints,
  screenBreakpoint,
  mediaQueries,
  commonBreakpoints,
}
export default theme
