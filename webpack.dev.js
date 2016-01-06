var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool:'cheap-module-source-map',
  entry: {
    core: ['react', 'react-dom'],
    index: path.join(__dirname, 'index.jsx')
  },
  module: {
    noParse: [/react$/, /react-dom$/],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'core',
      minChunks: Infinity
    })
  ]
}
