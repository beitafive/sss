module.exports = {

}
const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'docs',
    lintOnSave: true,
    chainWebpack: config => {
        // alias
        config.resolve.alias
            .set('~', resolve('src')) // key,'value'自行定义
        // npm run build --report
        if (process.env.NODE_ENV === 'production' && process.env.npm_config_report) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                .end()
            config.plugins.delete('prefetch')
        }
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        open: true,
        proxy: {
            '/JudicialZjjzFx': {
                target: 'http://223.4.74.40:7080',
                ws: true,
                changeOrigin: true
            }
        }
    },
    // 以下会合并到webpack配置中
    // vue inspect 查看webpack配置
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        }
    }
}
