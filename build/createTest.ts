import fs from 'fs';
import path from "path";
import { err, testContext } from './const';
export default function createTestFile(createPath: string, name: string) {
    const suffixName = name + '.test.ts';
    !fs.existsSync(createPath) && fs.mkdirSync(createPath);
    createPath = path.join(createPath, suffixName)
    if (fs.existsSync(createPath)) {
        err(suffixName + '文件已存在,请重新创建!')
        return;
    }
    fs.writeFile(createPath, testContext(name), (error) => {
        if (error) {
            err(suffixName + '文件创建失败!')
        }
    })
}