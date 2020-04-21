const path = require('path');

module.exports = function(env, argv) {

  const base = {
    entry: {
      'spreadsheet/js/spreadsheet': './src/clients/spreadsheet/spreadsheet.tsx'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(process.cwd(), 'static/public')
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: { rules: [
      { test: /\.tsx?$/, use: [ { loader: 'ts-loader' } ] }
    ] }
  }

  return base;
}
