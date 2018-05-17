/*
 * webpack :: Ming
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, '../src/app.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',	
				}
			},
			{
				test: /\.styl$/,
				loader: ['style-loader', 'css-loader', 'stylus-loader']
			},
		]
	},
	resolve: {
    	extensions: ['.js', '.jsx', 'css', '.styl', '.png', '.jpg', '.svg', '.json', 'jsonp']
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),	//热模块替换插件
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html')
		})
	]

}