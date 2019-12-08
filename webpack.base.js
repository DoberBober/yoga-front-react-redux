const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Tell webpack to run babel on every file it runs through
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
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
	new MiniCssExtractPlugin({
		filename: "./css/style.css"
	}),
	]
};
