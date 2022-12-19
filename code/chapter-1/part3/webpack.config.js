// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// webpack中的所有配置信息都应该写在module.exports中
module.exports = {

    mode: 'production',

    // * 指定入口文件
    entry: "./src/index.ts",

    // * 指定打包文件所在目录
    output: {
        // 指定打包目录
        path: path.resolve(__dirname,'dist'),
        // 打包后文件名
        filename: "bundle.js",
        clean: true
    },

    // * 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            title:'自定义title',
            template: "./src/index.html"
        }),
    ],

    // 用来设置引用的模块化(哪些模块可以被引用)
    resolve: {
        extensions: ['.ts','.js']
    }
}