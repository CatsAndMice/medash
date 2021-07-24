const path = require('path');
module.exports = {
    mode: "production",
    output: {
        library: 'tool-hai',
        libraryTarget: 'umd',
        filename: 'tool-hai.min.js',
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