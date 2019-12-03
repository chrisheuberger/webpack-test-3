const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // runs last: injects styles into DOM
          "css-loader", // runs second: translates CSS into CommnJS
          "sass-loader" // runs first: copiles Sass into CSS
        ]
      }
    ]
  }
});
