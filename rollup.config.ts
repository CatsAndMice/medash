import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
    input: { main: "./main.ts" },
    output: [{
        main: [{
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'esm'
        }, {
            file: pkg.browser,
            format: 'umd',
            name: '_t'
        }]
    }],
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