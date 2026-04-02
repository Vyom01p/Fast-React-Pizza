const { plugin } = require("postcss");

module.exports = {
  plugin: [require("prettier-plugin-tailwind")],
  singleQuote : true
};
