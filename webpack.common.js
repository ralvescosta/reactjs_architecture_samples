const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: path.resolve(__dirname, 'public'),
    // main bundle
    filename: '[name].bundle.js',
    // vendor bundle
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss', '.svg'],
    alias: {
      '~': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'media',
            publicPath: 'media',
            name: "[name].[ext]",
          }
        },
      },
    ]
  },
}