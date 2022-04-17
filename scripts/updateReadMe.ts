import fs from "fs/promises"
import path from "path"
const readMePath = path.join(__dirname, '../README.md')
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

const getReadMeContent = async () => {
    const cdnLinksContent = await replaceContent()
    let content = await fs.readFile(readMePath, 'utf8')
    //正则匹配,替换新的CDN链接
    content = content.replace(/<!--cdn-links-start-->([\s\S]*)<!--cdn-links-end-->/g, cdnLinksContent)
    return content
}

export default async () => {
    const fileContent = await getReadMeContent()
    await fs.writeFile(readMePath, fileContent)
}
