import fs from 'fs'
import Path from "path"
let filesPath = Path.join(__dirname, 'src')
let files = fs.readdirSync(filesPath);
files.forEach(file => {
    let filePath = Path.join(filesPath, file)
    fs.readFileSync(filePath)

})

