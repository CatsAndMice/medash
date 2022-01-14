const build = require('./build/build');
const pluginsCommon = require('./pluginsCommon')

export default [{
    input: ["./main.ts", ...build],
    output: [
        {
            dir: 'lib',
            format: 'cjs'
        }
    ],
    plugins: pluginsCommon
}, {
    input: "./main.ts",
    output: [
        {
            file: 'dist/medash.min.js',
            name: 'medash',
            format: 'umd'
        }
    ],
    plugins: pluginsCommon
}];