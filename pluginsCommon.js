const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const typescript = require('rollup-plugin-typescript2')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = [
    typescript(),
    commonjs(),
    resolve(),
    getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
        allowAllFormats: true,
    }),
]