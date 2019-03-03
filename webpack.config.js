const path = require('path');
// Para convertir el codigo html.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Para convertir archivos .css en producción,
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // Toma el archivo lo convierte a un archivo app.js
    app: [
      '@babel/polyfill',
      './src/app/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.bundle.js'
  },
  devServer: {
    port: 4000
  },
  module: {
    rules: [
      {
        // Reglas para babel.
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        // Carga los archivos css.
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Direccion de la plantilla html.
      template: './src/index.html',
      // Minificción del codigo html.
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.bundle.css'
    })
  ]
};