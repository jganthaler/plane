var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    }
};