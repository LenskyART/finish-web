const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: false
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/feedback/feedback.html'),
            filename: 'feedback.html',
            minify: {
                collapseWhitespace: false
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/call/call.html'),
            filename: 'call.html',
            minify: {
                collapseWhitespace: false
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    },
};