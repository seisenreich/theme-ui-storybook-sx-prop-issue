import {
  Colors,
  MediaQuery,
  ScreenBreakpoint,
  SpaceAlias,
  Variants,
} from "../utils/theme.types"
import { CommonBreakpoints } from "../utils/theme"

declare module "theme-ui" {
  interface Theme {
    baseFontSize: string
    colorPalette: Colors
    spaceAlias: SpaceAlias
    variants: Variants
    breakpoints: Array<string>
    screenBreakpoint: ScreenBreakpoint
    mediaQueries: MediaQuery
    commonBreakpoints: CommonBreakpoints
  }
}
