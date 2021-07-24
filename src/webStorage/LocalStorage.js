const ModuleStorage = require('./ModuleStorage');
class LocalStorage extends ModuleStorage {
    constructor() {
        super();
        //存储类型
        try {
            this.Storage = globalThis.localStorage;
        } catch {
            console.warn('webStorge仅适用于浏览器环境');
        }

    }

    setItem(key, value) {
        if (this._isValue(value)) {
            this._isHaveStoargeAndKey(key) ? this.Storage.setItem(key, JSON.stringify(value)) : null;
        }
    }

    getItem(key) {
        return this._isHaveStoargeAndKey(key) ? JSON.parse(this.Storage.getItem(key)) : null;
    }

    removeItem(key) {
        return this._isHaveStoargeAndKey(key) ? this.Storage.removeItem(key) : null;
    }

    clear() {
        return this._isHaveStoarge() ? this.Storage.clear() : null;
    }
}

module.exports = new LocalStorage();