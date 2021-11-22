import fs from "fs";

const addContext = (args: string[], name: string) => {
    let imports = args[0] + `import ${name} from "../main";\r\n`
    let contexts = args[1].split('{');
    let ctx = contexts[0] + `{\r\n${name},` + contexts[1];
    let dafaultContexts = args[2].split('{')
    let ctxs = dafaultContexts[0] + `{\r\n${name},` + dafaultContexts[1];
    return [imports, ctx, ctxs].join('export');

}
const getMainContext = (path, name: string) => {
    fs.readFile('../main.ts', 'utf-8', (err, data) => {
        if (err) {
            return;
        }
        addContext(data.split('export'), name)
    })
}

// getMainContext('aa')