import fs from "fs";
import path from 'path';
import { err } from "./const";

export function create(createPath: string, suffixName: string) {
    !fs.existsSync(createPath) && fs.mkdirSync(createPath);
    return path.join(createPath, suffixName)
}

export function write(createPath: string, context: string) {
    if (fs.existsSync(createPath)) {
        err(createPath + '文件已存在!')
        return;
    }
    fs.writeFile(createPath, context, (error) => {
        if (error) {
            err(createPath + '文件创建失败!')
        }
    })
}