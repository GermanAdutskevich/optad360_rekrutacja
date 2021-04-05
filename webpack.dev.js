const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 1030,
    host: "0.0.0.0",
  },
});
