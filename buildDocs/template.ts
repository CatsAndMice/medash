import { isEmptyObj, or, isEmpty } from "../main"
import process from "process"
import { err } from "../build/const";
import generateExample from "../build/generateExample"
import path from "path"

export type docs = {
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
    return setValue
}

function getExample(content: string) {
    return '```js\n' + content + '```'
}

export const generateDocs = async (doc: docs, callBack: () => string) => {
    const filePath = callBack()
    const splitFilePath = filePath.split(path.sep)
    const file = splitFilePath[splitFilePath.length - 1]
    if (or(isEmptyObj(doc), isEmpty(doc.version))) {
        err(`请完善${file}文档`)
        process.exit(1);
    }
    return `${doc.desc ? getSetValue(doc.desc) : ''}  
**添加版本**  
${getSetValue(doc.version)}
**参数**   
${doc.param ? getSetValue(doc.param) : ''}
**返回**  
${doc.return ? getSetValue(doc.return) : ''}
**例子**  
${doc.example ? getExample(getSetValue(doc.example)) : await generateExample(filePath)}`
}