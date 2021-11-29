/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

module.exports = {

    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@assets',
                'common': '@common',
                'components': '@components',
                'network': '@network',
                'views': '@views'
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            })
        ]
    },
    // 三方插件的选项
    pluginOptions: {
        // ...
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                // 导入全局公共样式
                path.resolve(__dirname, './src/assets/styles/reset.less')
            ]
        }
    },
    lintOnSave: true
}