const path = require('path')
// 导入vue-loader插件
const VueLoaderPlugin = require ('vue-loader/lib/plugin')

// 打包文件下生成index文件
const HtmlWebpackPlugin=require('html-webpack-plugin')

//打包前删除打包的文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 
module.exports={
    mode:'development',//production :生产机环境  development:开发环境
    // 打包入口
    entry:'./src/main.js',
    // 打包出口
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,"../dist")
    },
    // 打包规则
    module:{
        rules:[ 
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            { 
                test:/\.vue$/,
                loader: 'vue-loader' 
            },
            {
                test:/\.(jpg|jpeg|png|svg)$/,
                loader:'url-loader',
                options:{
                name:'[name].[ext]',
                limit:'2048'
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
     ]
    },
    // 插件
    plugins:[
        new VueLoaderPlugin(),
        //生成dist下的index.html
        new HtmlWebpackPlugin({
            template:'./index.html'
        }), 
        new CleanWebpackPlugin(),
    ],
    resolve:{
        alias:{
            'vue':'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname,'../src')
        }
    }

}