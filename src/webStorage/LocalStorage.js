const ModuleStorage = require('./ModuleStorage')
class LocalStorage extends ModuleStorage {
  constructor () {
    super()
    // 存储类型
    try {
      this.Storage = globalThis.localStorage
    } catch {
      console.warn('webStorge仅适用于浏览器环境')
    }
  }

  setItem (key, value) {
    if (super._isValue(value)) {
      super._isHaveStoargeAndKey(key) && this.Storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem (key) {
    return super._isHaveStoargeAndKey(key) ? JSON.parse(this.Storage.getItem(key)) : null
  }

  removeItem (key) {
    return super._isHaveStoargeAndKey(key) ? this.Storage.removeItem(key) : null
  }

  clear () {
    return super._isHaveStoarge() ? this.Storage.clear() : null
  }
}

module.exports = new LocalStorage()
