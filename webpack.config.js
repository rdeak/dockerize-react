const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./react-app",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      title: "Custom title",
      customval: "Custom val",
      hash: true
    })
  ]
};
