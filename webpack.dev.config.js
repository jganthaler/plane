const baseConfig = require('./webpack.base.config');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: ['**/node_modules'],
        followSymlinks: false,
        aggregateTimeout: 200,
        poll: 1000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        // 4. Inject styles to DOM
                        loader: 'style-loader',
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
                    //         postcssOptions: {
                    //             plugins: [
                    //                 [
                    //                     'postcss-preset-env',
                    //                     {}
                    //                 ]
                    //             ]
                    //         }
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
