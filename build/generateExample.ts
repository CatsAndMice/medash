import path from "path"
import fsPromises from "fs/promises"
const EXAMPLE = 'example'
async function getFolder(examplePath: string) {
    const dirs = await fsPromises.readdir(examplePath)
    return dirs
}

async function getFileContent(filePath: string) {
    // const isFound = fsPromise
    const content = await fsPromises.readFile(filePath, 'utf-8')
    return content
}

function dealWithFils(filePath: string, files: string[]) {
    files.forEach(async (file) => {
        const getFileContentPath = path.join(filePath, file)
        const [beforePath, afterPath] = getFileContentPath.split(EXAMPLE)
        const docsPath = path.join(beforePath, 'docs/v3')
        const docsFilePath = afterPath.replace(/\.\w+/g, '.md')
        const mdPath = path.join(docsPath, docsFilePath)
        Promise.all([getFileContent(getFileContentPath), getFileContent(mdPath)]).then((contents) => {
            const [codeContent, mdContent] = contents
            console.log(codeContent, mdContent);

        })

    })
}


async function main() {
    const beforePath = path.resolve()
    const examplePath = path.join(beforePath, EXAMPLE)
    const dirs = await getFolder(examplePath)
    dirs.forEach(async (dir) => {
        const filePath = path.join(examplePath, dir)
        const files = await getFolder(filePath)
        dealWithFils(filePath, files)
    })
}

main()