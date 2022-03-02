const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.join(__dirname, "../");
const PUBLIC_DIR = path.join(ROOT_DIR, "src");

module.exports = {
  entry: [path.resolve(PUBLIC_DIR, "index.js")],
  output: {
    path: path.resolve(ROOT_DIR, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: [path.resolve("node_modules"), "node_modules"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR, "index.html"),
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },
};
