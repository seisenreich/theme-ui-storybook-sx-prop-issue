const path = require("path")
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-css-modules-preset",
    "storybook-addon-next-router",
  ],
  webpackFinal: async (config) => {
    // storybook looks up for emotion v10, but we use emotion v11. This alias mapping is required to use v11 in storybook.
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
          "@emotion/styled-base": toPath("node_modules/@emotion/styled"),
        },
      },
    }
  },
}
