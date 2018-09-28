const commonPaths = require("./paths");

module.exports = {
	mode: "development",
	output: {
		filename: "[name].js",
		path: commonPaths.outputPath,
		chunkFilename: "[name].js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: "[local]___[hash:base64:5]"
						}
					},
					"sass-loader"
				]
			}
		]
	}
	// devServer: {
	// 	historyApiFallback: true,
	// 	contentBase: commonPaths.templatePath,
	// 	port: 3000,
	// 	open: true
	// }
};
