import { write, create, reWrite } from "./createAndWrite";
import path from "path";
import fsPromises from "fs/promises";
import { docsPath } from './const';
import getSrcLists from './getSrcLists'
import { isEmpty } from "../main"

const isContextFn = async (mdPath: string): Promise<boolean> => {
    let context = await fsPromises.readFile(mdPath, 'utf-8')
    context = context.trim()
    return !isEmpty(context)
}

const getContent = async (dir, files, filePath) => {
    let text = `* ${dir}\n`;
    files.sort((a, b) => a - b);
    for (const file of files) {
        // md文件内容为空时，过滤掉
        const mdPath = path.join(filePath, file)
        const isContext = await isContextFn(mdPath)
        isContext ? text += `  * [${file.split('.')[0]}](v3/${dir}/${file})\n` : null
    }
    return text;
}

const writeContent = (content) => {
    const writeFilePath = path.join(__dirname, '../docs/_sidebar.md');
    fsPromises.writeFile(writeFilePath, content);
}

//全部的Promise状态完成后才进行文件写入
const allPromisesFinish = (promises, content) => {
    Promise.all(promises).then(() => {
        writeContent(content());
    })
}

const sortContents = (contents: string[]) => {
    //数组内容字符串排序
    return contents.sort((content1, content2) => {
        const a = content1[2]
        const b = content2[2]
        return a.charCodeAt(0) - b.charCodeAt(0);
    }).join('')
}

//创建目录
const readDir = async () => {
    let startHeader = '* [快速开始](readme.md)\n';
    const contents: string[] = []
    const dirs = await getSrcLists(docsPath);
    const promises: any[] = [];
    dirs.forEach((dir) => {
        const promise = new Promise(async (resolve) => {
            const filePath = path.join(docsPath, dir);
            getSrcLists(filePath).then(async files => {
                const sidebarContent = await getContent(dir, files, filePath)
                contents.push(sidebarContent)
                resolve(contents);
            })
        })
        promises.push(promise);
    })
    //闭包,方便获取content的值
    allPromisesFinish(promises, () => startHeader + sortContents(contents));
}

/**
 * createPath：文件夹路径
 * name：文件名
 */
export default (createPath: string, name: string, docsContent: string) => {
    const suffixName = name + '.md';
    createPath = create(createPath, suffixName);
    reWrite(createPath, docsContent, readDir);
}