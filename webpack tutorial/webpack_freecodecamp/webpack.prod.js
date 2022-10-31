const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
	mode: "production",
	// devtool: "none",
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[name].[hash][ext]",
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
});
