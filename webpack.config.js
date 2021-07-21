const HtmlWebpackPlugin = require("html-webpack-plugin"),
    path = require('path');
module.exports = {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            inject: 'body',
            scriptLoading: 'blocking',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 9000,
    }
}