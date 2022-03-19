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

//创建目录
const readDir = async () => {
    let content = '* [快速开始](readme.md)\n';
    const dirs = await fsPromises.readdir(docsPath);
    const promises: any[] = [];
    dirs.forEach((dir) => {
        const promise = new Promise(async (resolve) => {
            const filePath = path.join(docsPath, dir);
            fsPromises.readdir(filePath).then(files => {
                content += getContent(dir, files);
                resolve(content);
            })
        })
        promises.push(promise);
    })
    //闭包,方便获取content的值
    allPromisesFinish(promises, () => content);
}

export default (createPath: string, name: string) => {
    const suffixName = name + '.md';
    createPath = create(createPath, suffixName);
    write(createPath, createDocs(), readDir);
}