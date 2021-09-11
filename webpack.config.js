const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './src/js/main/main.js',
    output: {
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx'
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
        })
    ]
};
