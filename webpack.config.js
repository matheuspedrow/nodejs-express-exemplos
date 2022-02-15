const path = require('patch')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
  }

}