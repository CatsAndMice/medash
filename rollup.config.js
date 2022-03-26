const build = require('./build/build');
const pluginsCommon = require('./pluginsCommon')
const { terser } = require("rollup-plugin-terser")
export default [
    {
        input: ["./main.ts", ...build],
        output: [
            {
                dir: 'es',
                format: 'es'
            }
        ],
        plugins: pluginsCommon
    },
    {
        input: ["./main.ts", ...build],
        output: [
            {
                dir: 'lib',
                format: 'cjs'
            }
        ],
        plugins: pluginsCommon
    },
    {
        input: "./main.ts",
        output: [
            {
                file: 'dist/medash.min.js',
                name: 'medash',
                format: 'umd'
            }
        ],
        plugins: [
            ...pluginsCommon,
            terser()
        ]
    }];