const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	watch: true,
	target: 'electron-main',
	mode: 'development',
	entry: './app/src/app.js',
	output: {
		path: __dirname + '/app/build',
		publicPath: 'build/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.node$/,
				loader: 'node-loader'
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js',
			'~': __dirname + '/app/src'
		}
	},
	plugins: [
		new VueLoaderPlugin()
	]
}