var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map', // gives line numbers in case of errors
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ],
        extentions: [
            '',
            '.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=env'
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};