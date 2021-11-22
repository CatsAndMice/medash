import path from "path";
import { lists, testPath } from './const'
import inquirer from 'inquirer';
import addMainContext from './addMainContext';
import createTestFile from './createTest'

async function getName(fileName: string) {
    let createPath = path.join(testPath, fileName)
    let { input } = await inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: '请为创建的文件命名:',
        }
    ])
    addMainContext();
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

