import { execSync } from "child_process";
import fs from "fs/promises";
import inquirer from 'inquirer';

const creatName = async () => {
    const { input } = await inquirer.prompt([
        {
            name:"input",
            type:'input',
            message:'本次'
        }
    ])
}

