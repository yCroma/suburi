const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'html', 'index.html'),
			filename: 'html/index.html'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'html', 'sample.html'),
			filename: 'html/sample.html'
		}),
	],
}
