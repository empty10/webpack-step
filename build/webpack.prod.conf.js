const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports={
    mode:'production',
    optimization:{  //优化项目
        minimizer:[
            new OptimizeCssAssetsPlugin(), //压缩css
            new TerserWebpackPlugin()
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
       
    ]
} 