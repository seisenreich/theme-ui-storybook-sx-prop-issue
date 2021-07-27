const { resolve } = require("path")
const path = require("path")
const { compilerOptions } = require(path.resolve(__dirname, "../tsconfig.json"))

module.exports = ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, "../"+compilerOptions.baseUrl))
  return config
}
