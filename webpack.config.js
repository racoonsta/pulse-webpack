const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development", // 'production'
  devServer: {
    port: 8000,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    watchFiles: {
      paths: ["src/**/*.html", "src/**/*.js", "src/**/*.scss", "server.js"],
    },
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new CopyPlugin({
      patterns: [{
        from: "src/static",
        to: "../dist/static"
      }, {
        from: "src/index.html",
        to: "../dist/index.html"
      }],
    }),
  ],
  ///
};