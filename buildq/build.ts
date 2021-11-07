import fs from 'fs'
import Path from "path"
import { eq, isZeroLen } from '../main';
let buildInputs = [];
let buildOuts = [];

function getFileNames(befter: string, after: string) {
    let filesPath = Path.join(befter, after)
    return { files: fs.readdirSync(filesPath), path: filesPath };
}

function setBuildInputs(tsFile) {
    console.log(tsFile);

}

function startBuild({ files, path }) {
    if (isZeroLen(files)) {
        console.log(buildInputs);
        return;
    }
    files.forEach((file) => {
        let childrenPath = Path.join(path, file)
        let isExtname = Path.extname(childrenPath);
        eq(isExtname, '.ts') || eq(isExtname, '.js') ? setBuildInputs(childrenPath) : startBuild(getFileNames(path, file));
    })
}

startBuild(getFileNames(__dirname, '../src'))
