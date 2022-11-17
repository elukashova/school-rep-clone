const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const assets = path.resolve(__dirname, 'assets');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080
  }
};

module.exports = ({develop}) => ({
  mode: develop ? "development" : "production",
  devtool: develop ? "inline-source-map" : "hidden-source-map",
  entry: {
    main: [
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
    optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {minimize: true}
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
    },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(mp.3|mp.4|wav)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
    roots: [__dirname, assets]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ]
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
  ],
  ...devServer(develop)
});