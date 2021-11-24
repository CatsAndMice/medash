import fs from "fs";
import { err } from "./const";

let filePath = '';
const getFilePath = function (filePath: string, name: string) {
    let afterPath = filePath.split('src')[1];
    afterPath = afterPath.replace('\\', '/');
    return '.' + afterPath + '/' + name;
}

const addContext = (args: string[], name: string) => {
    let imports = args[0] + `import ${name} from "${getFilePath(filePath, name)}";\r\n`
    let contexts = args[1].split('{');
    let ctx = contexts[0] + `{\r\n${name},` + contexts[1];
    let dafaultContexts = args[2].split('{')
    let ctxs = dafaultContexts[0] + `{\r\n${name},` + dafaultContexts[1];
    return [imports, ctx, ctxs].join('export');
}

export default (path: string, name: string) => {
    filePath = path
    fs.readFile('./main.ts', 'utf-8', (readError, data) => {
        if (readError) {
            console.error(readError);

            return;
        }
        fs.writeFile('./main.ts', addContext(data.split('export'), name), (error) => {
            console.error(error);
        })
    })
}
