/*
 * webpack :: Ming
 */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackconfig = require('./webpack.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(webpackconfig, {
	devtool: 'eval-source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 500,
					name: 'images/[name].[hash:7].[ext]'
				}
			},
		]
	},
	plugins: [
	],

	devServer: {
		contentBase: path.join(__dirname, '../dist'),
  		compress: true,
  		port: 8080,
  		open: true,
  		historyApiFallback: true,
  		hot: true,
  		inline: true,
  		progress: true
	}

})