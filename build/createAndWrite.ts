import fs from "fs";
import path from 'path';
import { err } from "./const";

export function create(createPath: string, suffixName: string) {
    !fs.existsSync(createPath) && fs.mkdirSync(createPath);
    return path.join(createPath, suffixName)
}

export function write(createPath: string, context: string, callBack = () => { }) {
    if (fs.existsSync(createPath)) {
        err(createPath + '文件已存在!')
        return;
    }
    fs.writeFile(createPath, context, (error) => {
        if (error) {
            err(createPath + '文件创建失败!')
            return;
        }
        callBack();
    })
}

//即使文件存在，也重新写入内容
export function reWrite(createPath: string, context: string, callBack = () => { }) {
    fs.writeFile(createPath, context, (error) => {
        if (error) {
            err(createPath + '文件创建失败!')
            return;
        }
        callBack();
    })
}