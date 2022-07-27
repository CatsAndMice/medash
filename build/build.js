const fs = require('fs');
const Path = require('path');

let buildInputs = [];

const getNames = (examplePath) => {
    const dirs = fs.readdirSync(examplePath)
    const isIncludes = (dir) => dir.includes('.DS_Store')
    if (isIncludes(dirs)) {
        const index = dirs.findIndex((dir) => isIncludes(dir))
        dirs.splice(index, 1)
    }
    return dirs
}

function getFileNames(befter, after) {
    let filesPath = Path.join(befter, after)
    return { files:getNames(filesPath), path: filesPath };
}

function setBuildInputs(tsFile) {
    let filePath = tsFile.split('src')[1]
    buildInputs.push('./src' + filePath.replace(/\\/g, "/"))
}

function startBuild({ files, path }) {
    if (files.length === 0) {
        return;
    }
    files.forEach((file) => {
        let childrenPath = Path.join(path, file)
        let isExtname = Path.extname(childrenPath);

        if (isExtname === '.ts') {
            setBuildInputs(childrenPath)
        } else if (isExtname === '.js') {
            return;
        } else {
            startBuild(getFileNames(path, file));
        }

    })
}
startBuild(getFileNames(__dirname, '../src'))
module.exports = buildInputs;
