import { srcPath } from "../build/const"
import getSrcLists from "../build/getSrcLists"
import { eq, isEmpty, mapToObj } from "../main"
import path from "path"
import fsPromises from "fs/promises"
import { createDocs } from "./template"
import { ANNOTATION, CHAR } from "./const"

function cacheMap(comments: string[]) {
    const map = new Map<string, Set<string>>()
    const reg = /^@([a-z]*) /
    comments.forEach((comment) => {
        const regComment = reg.exec(comment)
        if (isEmpty(regComment)) return
        const readyComment = comment.replace(reg, '')
        const key = (((regComment as any[])[0]) as string).trim().replace(CHAR, '')
        const mapValue = map.get(key)
        if (mapValue) {
            mapValue.add(readyComment)
            return
        }
        const set = new Set<string>()
        set.add(readyComment)
        map.set(key, set)
    })

    return map
}

function getQuery(comment: string) {
    comment = comment.replace(/\*\/$/, '')
    let splitComment = comment.split(CHAR)
    splitComment = splitComment.slice(1, splitComment.length).map(val => (CHAR + val.replace(/((\* $)|(\* ))/gm, '')).trim())
    console.log(splitComment);

    return cacheMap(splitComment)
}

function getAnnotation(content: string) {
    const execContent = ANNOTATION.exec(content)
    if (isEmpty(execContent)) return
    const comment = (execContent as any[])[0]
    return getQuery(comment)
}

async function createFile(file: string, docsContent: string) {
    file = file.replace(/\.[a-z]*$/g, '.md')
    fsPromises.writeFile('./' + file, docsContent)
}
// TODO:排除已存在的md文件，删除执行npm run create 创建md文件的逻辑
// TODO:示例代码生成时机调整
(async () => {
    const lists = await getSrcLists(srcPath)
    lists.forEach(async list => {
        const filePath = path.resolve(srcPath, list)
        const files = await getSrcLists(filePath)
        files.forEach(async file => {
            const content = await fsPromises.readFile(path.resolve(filePath, file), 'utf-8')
            const exportsArray = content.split('export')
            const promises: any[] = []
            exportsArray.forEach(exportsContent => {
                if (isEmpty(exportsContent)) return
                promises.push(Promise.resolve().then(() => getAnnotation(exportsContent)))
            })
            let docsContent = ''
            Promise.all(promises).then((result) => {
                result.forEach((res) => {
                    if (isEmpty(res)) return
                    const docs = createDocs((mapToObj(res as Map<string, Set<string>>)) as Object)
                    if (isEmpty(docs)) return
                    docsContent += `${docs}  \n`
                })
                isEmpty(docsContent) ? null : createFile(file, docsContent)
            })
        })
    })
})()