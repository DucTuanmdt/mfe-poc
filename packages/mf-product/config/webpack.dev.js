const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const federationConfig = require("./federationConfig");

const domain = process.env.DOMAIN;
const port = process.env.PORT;

const devCongig = {
  mode: "development",
  output: {
    publicPath: domain,
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  devtool: 'source-map',
  
  plugins: [new ModuleFederationPlugin(federationConfig)],
};

module.exports = merge(commonConfig, devCongig);
