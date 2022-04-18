import fs from "fs/promises"
import path from "path"
const getFilePath = (filePath: string) => path.join(__dirname, filePath)

const readMePaths = [getFilePath('../README.md'), getFilePath('../docs/readme.md')]

const getReadPkgContent = async () => {
    let pkg: any = await fs.readFile(path.join(__dirname, '../package.json'), 'utf8')
    pkg = JSON.parse(pkg)
    const version: string = pkg.version
    return version.replace('v', '')
}

const replaceContent = async () => {
    const version = await getReadPkgContent()
    return `<!--cdn-links-start-->
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/medash@${version}/dist/medash.min.js"></script>
\`\`\`
<!--cdn-links-end-->`
}

const getReadMeContent = async (readMePath: string) => {
    const cdnLinksContent = await replaceContent()
    let content = await fs.readFile(readMePath, 'utf8')
    //正则匹配,替换新的CDN链接
    content = content.replace(/<!--cdn-links-start-->([\s\S]*)<!--cdn-links-end-->/g, cdnLinksContent)
    return content
}

export default () => {
    readMePaths.forEach(async (readMePath) => {
        const fileContent = await getReadMeContent(readMePath)
        fs.writeFile(readMePath, fileContent)
    })
}
