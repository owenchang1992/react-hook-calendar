const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env={}, argv={}) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          argv.mode === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          {
            loader: "css-loader", options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    argv.mode === "development" ? new HtmlWebpackPlugin() : null,
    argv.mode === "production" ? new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }) : null
  ].filter(
    plugins => !! plugins
  )
})