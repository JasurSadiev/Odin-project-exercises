const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	// devtool: "none",
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
