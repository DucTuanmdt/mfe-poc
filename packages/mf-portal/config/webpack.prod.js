const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const commonConfig = require("./webpack.common");
const federationConfig = require("./federationConfig");

const domain = process.env.DOMAIN;

const productionConfig = {
  mode: "production",
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: domain,
		chunkFilename: "[name].[contenthash].js",
		filename: "[name].[contenthash].js",
		assetModuleFilename: "[name].[contenthash][ext][query]",
		clean: true,
	},

  plugins: [
    new ModuleFederationPlugin(federationConfig),
  ],
};

module.exports = merge(commonConfig, productionConfig);
