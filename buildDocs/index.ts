import { srcPath, docsPath } from "../build/const"
import getSrcLists from "../build/getSrcLists"
import { isEmpty, mapToObj, or, eq, getType } from "../main"
import path from "path"
import fsPromises from "fs/promises"
import { generateDocs, docs } from "./template"
import { ANNOTATION, CHAR } from "./const"
import createDocs from "../build/createDocs"

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
    return cacheMap(splitComment)
}

function getAnnotation(content: string) {
    const execContent = ANNOTATION.exec(content)
    if (isEmpty(execContent)) return
    const comment = (execContent as any[])[0]
    return getQuery(comment)
}

function getLastPath(file: string) {
    const splitFilePath = file.split('/src/')
    return splitFilePath[splitFilePath.length - 1]
}

const isMap = (map) => eq(getType(map), 'Map');



(async () => {
    const lists = await getSrcLists(srcPath)
    lists.forEach(async list => {
        const filePath = path.resolve(srcPath, list)
        const files = await getSrcLists(filePath)
        files.forEach(async file => {
            const srcFilePath = path.resolve(filePath, file)
            const content = await fsPromises.readFile(srcFilePath, 'utf-8')
            const exportsArray = content.split('export')
            const promises: any[] = []
            exportsArray.forEach(exportsContent => {
                if (isEmpty(exportsContent)) return
                promises.push(Promise.resolve().then(() => getAnnotation(exportsContent)))
            })
            let docsContent = ''
            Promise.all(promises).then(async (result) => {
                const docsPromises: any[] = []
                result.forEach((res) => {
                    //拼接字符串
                    const promiseFn = async () => {
                        const isMapNoSize = isMap(res) && isEmpty(res.size)
                        if (or(isEmpty(res), isMapNoSize)) return
                        const docs = await generateDocs((mapToObj(res as Map<string, Set<string>>)) as docs, () => getLastPath(srcFilePath))
                        if (isEmpty(docs)) return
                        docsContent += `${docs}  \n`
                        return docsContent
                    }

                    //Promise类型统一添加至数组中
                    docsPromises.push(promiseFn())
                })

                //所有的Promise完成后，docsContent已拼接完成
                Promise.all(docsPromises).then(() => {
                    const splitFilePath = filePath.split(path.sep)
                    const mdPath = path.join(docsPath, splitFilePath[splitFilePath.length - 1])
                    
                    isEmpty(docsContent) ? null : createDocs(mdPath, file.replace(/\.[a-z]*$/, ''), docsContent)
                })
            })
        })
    })
})()