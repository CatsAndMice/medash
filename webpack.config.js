const path = require('path');
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        library: '@lihai-js/tool',
        libraryTarget: 'umd',
        filename: 'main.js',
        libraryExport: 'default',
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
        }]
    }
}