const path = require("path");
const dev = require("./webpack.dev.conf");
const prod = require("./webpack.prod.conf");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
  console.log("环境", env);
  const isDev = env.development;
  const base = {
    entry: {
      home:path.resolve(__dirname, "../src/home/index.js"),
      about:path.resolve(__dirname, "../src/about/index.js"),
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../dist"),
    },
    module: {
      // 解析什么文件 test，用什么去转 loader
      // loader 的3种写法 [],{} ,''
      rules: [
        {
          test:/\.vue$/,
          use:'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            isDev?"style-loader":MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                //给loader 传递参数
                importLoaders: 2,
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/main.css",
      }),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
        filename: "home/index.html",
        chunks:['home'],
        hash: true,
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
        filename: "about/index.html",
        chunks:['about'],
        hash: true,
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        },
      }),
    ].filter(Boolean),
  };

  if (isDev) {
    return merge(base, dev);
  } else {
    return merge(base, prod);
  }
};
