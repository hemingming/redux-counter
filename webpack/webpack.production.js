/*
 * webpack :: Ming
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, '../src/app.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.styl$/,
				loader: ['style-loader', 'css-loader', 'stylus-loader']
			},
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
	resolve: {
    	extensions: ['.js', '.jsx', 'css', '.styl', '.png', '.jpg', '.svg', '.json', 'jsonp']
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),	//热模块替换插件
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html')
		})
	],

	devServer: {
		contentBase: path.join(__dirname, '../dist'),
  		compress: true,
  		port: 8080,
  		open: true,
  		historyApiFallback: true,
  		hot: true,
  		inline: true,
  		progress: true,
  		proxy: {
			"/doubanapi": {
				target: "http://db.miaov.com",
				secure: false,
				changeOrigin: true
			}
  		}
	}

}