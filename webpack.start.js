const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const open = require('opn')
const webpackConfig = require('./src/config/webpack-config')
const path = require('path')

function start() {
    

    const compiler = webpack(webpackConfig)
    const server = new webpackDevServer(compiler, {publicPath: '/', historyApiFallback: true, noInfo: true, overlay: true})

    server.listen(8080, 'localhost', () => open('http://localhost:8080'))
}

start()
