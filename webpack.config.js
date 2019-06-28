const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './client/src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /tests/],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'BookingModule.bundle.js',
  },
  plugins: [
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      algorithm: 'brotli',
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
