const Ldb = require('./LocalStorage')
const FromTest = require('../fromTest/FromTest')
const isBrowser = FromTest.isBrowser()
const File = !isBrowser&&require('./file')
class LowDb {
    setItem(key, value) {
        isBrowser ? Ldb.setItem(key, value) : File.setItem(key, value)
    }

    getItem(key) {
        return isBrowser ? Ldb.getItem(key) : File.getItem(key)
    }

    removeItem(key) {
        return isBrowser ? Ldb.removeItem(key) : File.removeItem(key)
    }

    clear() {
        return isBrowser ? Ldb.clear() : File.clear()
    }
}

module.exports = new LowDb();