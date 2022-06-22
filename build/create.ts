import path from "path";
import { testPath, srcPath, docsPath, examplePath, err } from './const';
import getSrcLists from "./getSrcLists";
import inquirer from 'inquirer';
import createDocs from "./createDocs";
import addMainContext from './addMainContext';
import createTestFile from './createTest'
import createFile from './createFile';
import createExample from "./createExample"
import { isEmpty, specialChar, ch } from "../main";

async function getName(fileName: string) {
    const createPath = path.join(srcPath, fileName);
    const createDocsPath = path.join(docsPath, fileName);
    const createTestPathPath = path.join(testPath, fileName);
    const createExamplePath = path.join(examplePath, fileName)
    let { input } = await inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: '请为创建的文件命名:',
        }
    ])
    if (isEmpty(input)) {
        err('error:创建文件未命名');
        return
    }
    const { isSpecialChar } = specialChar(input);
    const { isCh } = ch(input);
    if (isSpecialChar) {
        err('error:文件名含有特殊字符!');
        return
    }

    if (isCh) {
        err('error:文件名含有中文!');
        return
    }
    createTestFile(createTestPathPath, input)
    createFile(createPath, input);
    createDocs(createDocsPath, input);
    createExample(createExamplePath, input);
    addMainContext(createPath, input);
}


async function typesCheck() {
    const lists = await getSrcLists(srcPath);
    inquirer.prompt([
        {
            name: 'list',
            type: 'list',
            message: '请选择对应的文件夹',
            choices: lists,
            default: [lists[0]]
        }
    ]).then(({ list }) => {
        getName(list)
    })

}


function create() {
    typesCheck()
}
create();

