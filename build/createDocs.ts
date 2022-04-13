import { write, create } from "./createAndWrite";
import { createDocs } from "./const";
import path from "path";
import fsPromises from "fs/promises";
import { docsPath } from './const';

const getContent = (dir, files) => {
    let text = `* ${dir}\n`;
    files.sort((a, b) => a - b);
    for (const file of files) {
        text += `  * [${file.split('.')[0]}](v3/${dir}/${file})\n`;
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
    const dirs = await fsPromises.readdir(docsPath);
    const promises: any[] = [];
    dirs.forEach((dir) => {
        const promise = new Promise(async (resolve) => {
            const filePath = path.join(docsPath, dir);
            fsPromises.readdir(filePath).then(files => {
                contents.push(getContent(dir, files))
                resolve(contents);
            })
        })
        promises.push(promise);
    })
    debugger
    //闭包,方便获取content的值
    allPromisesFinish(promises, () => startHeader + sortContents(contents));
}



export default (createPath: string, name: string) => {
    const suffixName = name + '.md';
    createPath = create(createPath, suffixName);
    write(createPath, createDocs(name), readDir);
}