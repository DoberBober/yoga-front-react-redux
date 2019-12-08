const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	// Tell webpack the root file of our
	// server application.
	entry: ['react-hot-loader/patch', 'babel-polyfill', './src/index.js'],

	// Tell webpack where to put output file
	// that is generated.
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/'
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			filename: "index.html",  //target html
			template: "./src/index.html" //source html
		})
	]
};

module.exports = merge(baseConfig, config);
