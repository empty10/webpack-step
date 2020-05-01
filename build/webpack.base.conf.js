const path = require("path");
const dev = require("./webpack.dev.conf");
const prod = require("./webpack.prod.conf");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  console.log("环境", env);
  const isDev = env.development;

  const base = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
        filename: "index.html",
        hash: true,
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        },
      }),
    ],
  };

  if (isDev) {
    return merge(base, dev);
  } else {
    return merge(base, prod);
  }
};
