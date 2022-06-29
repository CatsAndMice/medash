import path from "path"
import fsPromises from "fs/promises"
import { isArray, isEmpty } from "../main"
import { examplePath } from "./const"

//es6模块化替换成commonJs模块化
function esToRequire(codeContent: string) {
    const reg = /import(.+)from.+/g
    const values: any[] = reg.exec(codeContent) as any[]
    if (isArray(values)) {
        const local = values[1]
        codeContent = codeContent.replace(reg, `const ${local} = require("medash")`)
    }
    return codeContent.trim()
}


export default async (filePath: string) => {
    filePath = path.join(examplePath, filePath)
    const codeContent = await fsPromises.readFile(filePath, 'utf-8')
    return isEmpty(codeContent) ? '' : `<me-embed>${esToRequire(codeContent)}</me-embed>`
}