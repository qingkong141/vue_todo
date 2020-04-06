const baseConfig = require('./webpack.base.js')
const merge =require('webpack-merge')

const prodConfig={
    mode:'production',//production :生产机环境  development:开发环境
}

module.exports=merge(baseConfig,prodConfig)