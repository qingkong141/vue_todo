
const baseConfig = require('./webpack.base.js')
const merge =require('webpack-merge')

const webpack = require('webpack')

const devConfig={
    mode:'development',//production :生产机环境  development:开发环境
    // 打包入口
    devtool:'eval',
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true,   //启用模块热替换
    },
    // 插件
    plugins:[
        new webpack.HotModuleReplacementPlugin() //模块热替换
    ]
}
module.exports = merge(baseConfig,devConfig)