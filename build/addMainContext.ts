import fs from "fs";
import { err } from "./const";

let filePath = '';
const getFilePath = function (filePath: string, name: string) {
    let afterPath = filePath.split('src')[1];
    afterPath = afterPath.replace('\\', '/');
    return './src' + afterPath + '/' + name;
}

const addContext = (args: string[], name: string) => {
    let importsHeader = `import ${name} from "${getFilePath(filePath, name)}";\r\n`;
    if (args[0].includes(importsHeader)) {
        err(name + '已导入!');
        return
    }
    let imports = args[0] + importsHeader;
    let contexts = args[1].split('{');
    let ctx = contexts[0] + `{\r\n${name},` + contexts[1];
    let dafaultContexts = args[2].split('{')
    let ctxs = dafaultContexts[0] + `{\r\n${name},` + dafaultContexts[1];
    return [imports, ctx, ctxs].join('export');
}

const writeFile = (context: string) => {
    fs.writeFile('./main.ts', context, (error) => {
        console.error(error);
    })
}

export default (path: string, name: string) => {
    filePath = path
    fs.readFile('./main.ts', 'utf-8', (readError, data) => {
        if (readError) {
            console.error(readError);
            return;
        }
        let context = addContext(data.split('export'), name);
        context ? writeFile(context) : null
    })
}
