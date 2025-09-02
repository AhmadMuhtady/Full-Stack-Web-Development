const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true, // optional: clears dist on each build
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'], // ✅ fixed
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'], // ✅ fixed earlier typo
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack App',
			filename: 'index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
};
