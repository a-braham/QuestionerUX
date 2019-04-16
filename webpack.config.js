const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    // publicPath: '/',
    filename: './dist/main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|sass)$/,
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
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};