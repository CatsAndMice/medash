import path from "path"
import fsPromises from "fs/promises"
import fs from "fs"
import { isNull, gte, isArray } from "../main"
import getSrcLists from "./getSrcLists"

const EXAMPLE = 'example'

async function getFileContent(filePath: string) {
    //文件不存在时，返回空内容
    if (!fs.existsSync(filePath)) {
        return ""
    }
    const content = await fsPromises.readFile(filePath, 'utf-8')
    return content
}

//es6模块化替换成commonJs模块化
function esToRequire(codeContent: string) {
    const reg = /import(.+)from.+/g
    const values: any[] = reg.exec(codeContent) as any[]
    if (isArray(values)) {
        const local = values[1]
        codeContent = codeContent.replace(reg, `const ${local} = require("medash")`)
    }
    return codeContent
}


function dealWithFils(filePath: string, files: string[]) {
    files.forEach(async (file) => {
        const getFileContentPath = path.join(filePath, file)
        const [beforePath, afterPath] = getFileContentPath.split(EXAMPLE)
        const docsPath = path.join(beforePath, 'docs/v3')
        const docsFilePath = afterPath.replace(/\.\w+/g, '.md')
        const mdPath = path.join(docsPath, docsFilePath)
        Promise.all([getFileContent(getFileContentPath), getFileContent(mdPath)]).then((contents) => {
            let [codeContent, mdContent] = contents
            const reg = /<me-embed>([\s\S]*)<\/me-embed>/g
            const values: any[] = reg.exec(mdContent) as any[]
            //排除已存在示例代码的md文件
            if (isNull(values)) return
            if (gte((values[1] as string).length, 10)) return
            mdContent = mdContent.replace(reg, `<me-embed>${esToRequire(codeContent)}</me-embed>`)
            fsPromises.writeFile(mdPath, mdContent)
        })
    })
}


async function main() {
    const beforePath = path.resolve()
    const examplePath = path.join(beforePath, EXAMPLE)
    const dirs = await getSrcLists(examplePath)
    dirs.forEach(async (dir) => {
        const filePath = path.join(examplePath, dir)
        const files = await getSrcLists(filePath)
        dealWithFils(filePath, files)
    })
}

main()