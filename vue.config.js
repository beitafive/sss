module.exports = {
    devServer: {
        proxy: {
            '/JudicialZjjzFx': {
                target: 'http://118.178.118.28:7080',
                ws: true,
                changeOrigin: true
            }
        }
    }
}