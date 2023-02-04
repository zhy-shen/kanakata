const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  resolve: {
    fallback: {
      "path": require.resolve('path-browserify'),
    } 
  },
  watch: true,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })],
  experiments: {
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									// Other plugins,
									[
										"postcss-nesting",
										{
											// Options
										},
									],
								],
							},
						},
					},
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ]
  }
};

module.exports = config;