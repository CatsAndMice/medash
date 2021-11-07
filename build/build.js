const fs = require('fs')
const Path = require('path');

let buildInputs = [];
function getFileNames(befter, after) {
    let filesPath = Path.join(befter, after)
    return { files: fs.readdirSync(filesPath), path: filesPath };
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
console.log(buildInputs);
module.exports = buildInputs;
