'use strict';

module.exports = {
  entry: './src/App',

  devtool: 'cheap-module-inline-source-map',

  devServer: {
    contentBase: '.',
    port: 4008,
    stats: 'errors-only'
  },
  output: {
    path: __dirname,
    pathinfo: true,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.purs$/,
        exclude: /node_modules/,
        loader: 'purs-loader',
        options: {
          src: [
            '.psc-package/psc-*/**/v*/src/**/*.purs',
            'src/**/*.purs'
          ],
          pscIde: true
        }
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      '.psc-package'
    ],

    extensions: [
      '.purs',
      '.js'
    ]
  }
}