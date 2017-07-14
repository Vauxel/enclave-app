module.exports = {
	watch: true,
	target: 'electron',
	entry: './app/src/app.js',
	output: {
		path: __dirname + '/app/build',
		publicPath: 'build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.node$/,
				loader: 'node-loader'
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
	}
}