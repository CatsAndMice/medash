const path = require('path');
console.log(path.resolve(__dirname, 'main.js'),);
module.exports = {
    mode: "production",
    entry: './main.js',
    output: {
        library: '@lihai-js/tool',
        libraryTarget: 'umd',
        filename: 'tool.js',
        libraryExport: 'default',
        path: __dirname + '/dist'
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