const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        oneOf: [
          {
            test: /icons\/.*.\.svg$/,
            use: ["@svgr/webpack"]
          },

          {
            test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
            use: [
              {
                loader: "file-loader"
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};
