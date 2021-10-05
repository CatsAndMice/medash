const ModuleStorage = require('./ModuleStorage');
const FromTest = require('../fromTest/FromTest')
const isBrowser = FromTest.isBrowser()
//防止被打包
const fs = eval("require('fs')")
const path = eval("require('path')")
const process = eval("require('process')")

//浏览器环境打包
const cwd = !isBrowser && process.cwd()
const dbPath = !isBrowser && path.join(cwd, `db`)

class File extends ModuleStorage {
    constructor() {
        super()
    }

    setItem(key, value) {
        let isKeyAndValue = super._isKey(key) && super._isValue(value);
        if (isKeyAndValue) {
            !fs.existsSync(dbPath) && fs.mkdirSync(dbPath)
            fs.writeFileSync(path.join(dbPath, `${key}.json`), JSON.stringify(value));
        }
    }

    _isExistsFile(key) {
        if (!super._isKey(key)) {
            return {
                isExists: false,
                filePath: ''
            }
        }

        let filePath = path.join(dbPath, `${key}.json`)
        let isExists = fs.existsSync(filePath)
        return {
            isExists,
            filePath
        }
    }

    getItem(key) {
        let { isExists, filePath } = this._isExistsFile(key)
        return isExists ? JSON.parse(fs.readFileSync(filePath).toString()) : null
    }

    removeItem(key) {
        let { isExists, filePath } = this._isExistsFile(key)
        return isExists ? !fs.rmSync(filePath) : true;
    }

    clear() {
        let isExists = fs.existsSync(dbPath);
        return isExists ? !fs.rmdirSync(dbPath, { recursive: true, force: true }) : true;
    }

}
module.exports = new File();