const path = require("path");
const config = require("./webpack.config");

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  hot: true,
  open: true,
};

config.devtool = "inline-source-map";

module.exports = config;
