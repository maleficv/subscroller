const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/views/index.html'
        })
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.jsx']
    }
};

