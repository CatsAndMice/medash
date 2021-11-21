import fs from 'fs';
import path from "path";
import { lists, testPath, err } from './const'
import inquirer from 'inquirer';

function createTestFile(createPath: string, name: string) {
    const suffixName = name + '.test.ts';
    createPath = path.join(createPath, suffixName)
    if (fs.existsSync(createPath)) {
        err(suffixName + '文件已存在,请重新创建!')
        return;
    }
    fs.writeFile(createPath, '11a', (err) => {
        console.log(err);
    })

}

async function getName(fileName: string) {
    let createPath = path.join(testPath, fileName)
    let { input } = await inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: '请为创建的文件命名:',
        }
    ])
    !fs.existsSync(createPath) && fs.mkdirSync(createPath);
    createTestFile(createPath, input)
}


async function typesCheck() {
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
console.log(testPath);

create();

