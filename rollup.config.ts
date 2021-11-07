import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
    input: ["./main.ts", './src/Array/getMin.ts'],
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