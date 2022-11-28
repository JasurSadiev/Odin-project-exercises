const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "inline-source-map",
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				type: "asset/resource",
			},
			// {
			// 	test: /\.(svg|png|jpg|gif)$/i,
			// 	use: {
			// 		loader: "file-loader",
			// 		options: {
			// 			name: "[name].[hash].[ext]",
			// 			outputPath: "imgs",
			// 		},
			// 	},
			// },
		],
	},
};
