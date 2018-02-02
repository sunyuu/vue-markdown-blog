const webpack = require('webpack')
const webpackConfig = require('./src/config/webpack-config')
const path = require('path')

function build() {
    webpackConfig.devtool = false
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
    webpack(webpackConfig, (err, stats) => {
        if (err !== null) {
          return console.error(err);
        }
    
        if (stats.hasErrors()) {
          console.log(stats.toString('errors-only'));
          return;
        }
    })
}

build()
