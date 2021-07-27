// noinspection NpmUsedModulesInstalled

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { ThemeProvider } from "theme-ui"
import { RouterContext } from "next/dist/next-server/lib/router-context" // next < 11.2
//import { RouterContext } from "next/dist/shared/lib/router-context"; // next 11.2
import theme from "../utils/theme"

const customViewports = {
  xsMobile: {
    name: "xs",
    type: "mobile",
    styles: { width: "320px", height: "568px" },
  },
  sm: {
    name: "sm",
    type: "mobile",
    styles: { width: "600px", height: "1280px" },
  },
  mdTablet: {
    name: "md",
    type: "tablet",
    styles: { width: "960px", height: "1280px" },
  },
  lgDesktop: {
    name: "lg",
    type: "desktop",
    styles: { width: "1280px", height: "720px" },
  },
  xl: {
    name: "xl",
    type: "desktop",
    styles: { width: "1920px", height: "1080px" },
  },
  wideDesktop: {
    name: "wide",
    type: "desktop",
    styles: { width: "3440px", height: "1440px" },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
