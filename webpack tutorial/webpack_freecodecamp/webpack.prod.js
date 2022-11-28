const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(common, {
	mode: "production",
	// devtool: "none",
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[name].[hash][ext]",
		clean: true,
	},
	plugins: [new CleanWebpackPlugin()],
});
