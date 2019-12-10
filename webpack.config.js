const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	devtool: 'source-map',
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			use: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.styl$/,
			use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {}
			},
			{
				loader: 'css-loader?sourceMap'

			},
			{
				loader: 'stylus-loader?sourceMap'
			}
			]
		},
		{
			test: /\.css$/,
			use: [
			'style-loader',
			'css-loader?sourceMap'
			]
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [
			{
				loader: 'file-loader'
			}
			]
		},
		{
			test: /\.(woff|woff2|ttf)$/,
			use: [
			{
				loader: 'file-loader',
				options: {
					limit: 20000,
					outputPath: 'fonts/',
					name: '[name].[ext]?[hash]',
				}
			}
			]
		},
		{
			test: /\.svg$/,
			use: [
			"babel-loader",
			{
				loader: "react-svg-loader",
				options: {
					svgo: {
						plugins: [
						{ removeTitle: false }
						],
						floatPrecision: 2
					}
				}
			}
			]
		}
		]
	},
	resolve: {
		extensions: [
		'.js',
		'.jsx'
		],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true
	},
	plugins: [
		// new HtmlWebPackPlugin({
		// 	hash: true,
		// 	filename: "index.html",  //target html
		// 	template: "./src/index.html" //source html
		// }),
		new MiniCssExtractPlugin({
			filename: "./css/style.css"
		}),
	]
};

module.exports = config;
