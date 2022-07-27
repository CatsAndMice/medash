import { isEmptyObj, or, isEmpty } from "../main"
import process from "process"
import { err } from "../build/const";
import generateExample from "../build/generateExample"
import path from "path"
import { trim } from "../main"

export type docs = {
    use: Set<string>,
    version: Set<string>,
    desc?: Set<string>,
    param?: Set<string>,
    return?: Set<string>,
    example?: Set<string>
}


function getSetValue(set: Set<string>) {
    let setValue = ''
    set.forEach((s) => {
        setValue += `${s}  \n`
    })
    return trim(setValue)
}

function getExample(content: string) {
    return '```js\n' + content + '\n```'
}

function getUseCode(use: string) {
    return '```ts\n' + use + '\n```'
}

export const generateDocs = async (doc: docs, callBack: () => string) => {
    const filePath = callBack()
    const splitFilePath = filePath.split(path.sep)
    const file = splitFilePath[splitFilePath.length - 1]
    if (or(isEmptyObj(doc), isEmpty(doc.version))) {
        err(`请完善${file}文档`)
        process.exit(1);
    }
    return `${doc.use ? getUseCode(getSetValue(doc.use)) : ''}\n
${doc.desc ? getSetValue(doc.desc) : ''}\n  
**添加版本**  
${getSetValue(doc.version)}\n
**参数**   
${doc.param ? getSetValue(doc.param) : ''}\n
**返回**  
${doc.return ? getSetValue(doc.return) : ''}\n
**例子**  
${doc.example ? getExample(getSetValue(doc.example)) : await generateExample(filePath)}`
}