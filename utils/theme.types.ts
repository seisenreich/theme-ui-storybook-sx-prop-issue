interface Color {
  default: string
  hover: string
}

type ColorKey =
  | "grey"
  | "midGrey"
  | "lightGrey"
  | "darkGrey"
  | "green"
  | "blue"
  | "seagreen"
  | "yellow"
  | "orange"
  | "white"
  | "anthracite"
  | "black"
export type Colors = {
  [propName in ColorKey]: Color
}

export type VariantName =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl"
export type ScreenBreakpoint = {
  [size in ScreenSize]: number
}
export type MediaQuery = {
  [size in ScreenSize]: string
}
interface Variant {
  default: string
  hover: string
  text: string
  textHover: string
  outlineText: string
  outlineTextHover: string
}
export type Variants = {
  [propName in VariantName]: Variant
}

export interface Size {
  none: string | number
  xxxs: string | number
  xxs: string | number
  xs: string | number
  sm: string | number
  md: string | number
  lg: string | number
  xl: string | number
  xxl: string | number
  xxxl: string | number
  xxxxl: string | number
  xxxxxl: string | number
}
export interface SpaceAlias extends Omit<Size, "xxxs"> {}
