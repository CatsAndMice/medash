const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const typescript = require('rollup-plugin-typescript2')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require("rollup-plugin-terser")
const build = require('./build/build')

export default {
    input: ["./main.ts", ...build],
    output: [
        {
            dir: 'lib/esm',
            format: 'esm'
        },

        {
            dir: 'lib/cjs',
            format: 'cjs'
        }
    ],
    plugins: [
        typescript(),
        commonjs(),
        resolve(),
        getBabelOutputPlugin({
            presets: ['@babel/preset-env'],
            allowAllFormats: true,
        }),
        terser()
    ]

};