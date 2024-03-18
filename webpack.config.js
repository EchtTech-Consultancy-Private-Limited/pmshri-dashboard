const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.mp4$/,
                use: ["url?limit=10000&mimetype=video/mp4"]
            }
        ]
    },
    resolve: {
        alias:{
            src:path.resolve(__dirname,'src')
        },
        extensions: ['.tsx', '.ts', '.js'],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}