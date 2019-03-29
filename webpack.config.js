const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.TARGET;
const ROOT_PATH = path.resolve(__dirname);
const nodeModulesDir = path.join(ROOT_PATH, 'node_modules');

// Common configuration settings
const common = {
  entry: path.resolve(ROOT_PATH, 'src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'lib.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(ROOT_PATH, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url-loader?limit=100000',
            'img-loader'
          ],
        exclude: /node_modules/
      }
    ]
  }
}

// Development configuration settings
if (TARGET === 'dev') {
  module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      publicPath: 'http://localhost:3000/dist/',
      port: '3000',
      host: '0.0.0.0',
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        },
        __DEV__: true
      })
    ]
  });
}

// Production configuration settings
if (TARGET === 'build') {
  module.exports = merge(common, {
    mode: 'production',
    entry: {
      'react-grid-dropdown': path.resolve(ROOT_PATH, 'src/index.js')
    },
    optimization: {},
    output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      filename: 'lib.js',
      library: 'ReactGridDropdown',
      libraryTarget: 'umd'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        },
        __DEV__: false
      })
    ]
  });
}
