var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
        path.resolve(__dirname, "./src/main.js"),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
        }],
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // test: /\.(png|jpg|gif|svg|tif|jpeg)$/,
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.i18n$/,
                loader: `@kazupon/vue-i18n-loader?${JSON.stringify(
          { includePaths: [path.resolve(__dirname), 'node_modules'] }
        )}`,
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|it/),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min',
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}

process.traceDeprecation = true;