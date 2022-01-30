import path from 'path';
import chalk from 'chalk';
export const srcPath = path.join(__dirname, '../src');
export const testPath = path.join(__dirname, '../test');
export const docsPath = path.join(__dirname, '../docs/v3');
export const examplePath = path.join(__dirname, '../example');
export const lists = ['Date', 'Array', 'Function', 'Object'];
export const err = (msg) => {
    console.log(chalk.red(msg));
}

export const testContext = (name: string) => {
    return `import { ${name} } from "../../main";
    
describe("${name} test",()=>{
    it("${name}",()=>{})
})
    `
}

export const srcContext = () => {
    return `export default ()=>{}`
}

export const exampleContext = (name: string) => {
    return `import { ${name} } from "../../main";`
}

export const createDocs = () => {
    let js = '```js\n\n```\n';
    let value = '`value`'
    return js + `

**参数**  
1. ${value}(any): 
  
**返回**  
        
  
**例子**  

`+ `<me-embed>const {} = require("medash");</me-embed>`
}