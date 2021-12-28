const baseConfig = require('./webpack.base.config');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        // 4. Inject styles to files
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        // 3. Turns css into commonjs
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    // {
                    //     // 2. Modifies css
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {}
                    //     }
                    // },
                    {
                        // 1. Turns sass into css
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                includePaths: ['src/scss']
                            }
                        }
                    }
                ]
            }
        ]
    }
});
