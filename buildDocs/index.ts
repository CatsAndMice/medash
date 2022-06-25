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

async function createFile(docsContent: string) {
    fsPromises.writeFile('./isNaN.md', docsContent)
}

(async () => {
    const lists = await getSrcLists(srcPath)
    const index = lists.findIndex((list) => eq(list, 'Functions'))
    const functionPath = path.resolve(srcPath, `${lists[index]}/isNaN.ts`)
    const content = await fsPromises.readFile(functionPath, 'utf-8')
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
            docsContent += `${createDocs((mapToObj(res as Map<string, Set<string>>)) as Object)}  \n`
        })
        // console.log(docsContent);
        
        createFile(docsContent)
    })


})()