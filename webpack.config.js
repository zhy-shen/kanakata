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
    filename: '[name].js',
    path: path.resolve(__dirname, 'kanakata'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.LoaderOptionsPlugin({
      test: /postcss-loader$/, // only for this module
      options: {
        mode: process.env.NODE_ENV
      }
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  experiments: {
    topLevelAwait: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|kuromoji|kuroshiro|html-react-parser)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
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
									["postcss-nesting"],
									["postcss-custom-media"],
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