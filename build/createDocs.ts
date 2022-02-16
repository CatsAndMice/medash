import { write, create } from "./createAndWrite";
import { createDocs } from "./const";
import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";
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

    console.log(content);

    const writeFilePath = path.join(__dirname, '../docs/_sidebar.md');
    fs.writeFile(writeFilePath, content, (err) => {
        console.log(err);
    });
}

//创建目录
const readDir = async () => {
    let content = '';
    const dirs = await fsPromises.readdir(docsPath);
    dirs.forEach((dir) => {
        const filePath = path.join(docsPath, dir);
        fs.readdir(filePath, (err, files) => {
            if (err) return;
            content += getContent(dir, files);
            writeContent(content);
        });
    })

}

export default (createPath: string, name: string) => {
    const suffixName = name + '.md';
    createPath = create(createPath, suffixName);
    write(createPath, createDocs(), readDir);
}