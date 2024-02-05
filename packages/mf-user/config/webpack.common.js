const DotenvWebpack = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const dotenv = require("dotenv");

// load respective environment variables
const envFilePath = `./env/.env.${process.env.ENV_PATH || "dev"}`;
dotenv.config({ path: envFilePath });

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // parse process.env variables for client-side use at build time.
    new DotenvWebpack({
      path: envFilePath,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
