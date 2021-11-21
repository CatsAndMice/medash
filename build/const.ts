import path from 'path';
import chalk from 'chalk';
export const srcPath = path.join(__dirname, '../src');
export const testPath = path.join(__dirname, '../test');
export const docsPath = path.join(__dirname, '../docs');
export const lists = ['Date', 'Array', 'Function', 'Object'];
export const err = (msg) => {
    console.log(chalk.red(msg));

}