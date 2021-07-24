const ModuleStorage = require('./ModuleStorage');
class SessionStorage extends ModuleStorage {
    constructor() {
        super();
        try {
            this.Storage = globalThis.sessionStorage;
        } catch {
            console.warn('webStorge仅适用于浏览器环境');
        }

    }

    getItem(key) {
        return this._isHaveStoargeAndKey(key) ? JSON.parse(this.Storage.getItem(key)) : null;
    }

    removeItem(key) {
        return this._isHaveStoargeAndKey(key) ? this.Storage.removeItem(key) : null;
    }

    clear() {
        return this._isHaveStoargeAndKey(key) ? this.Storage.clear() : null;
    }
}

module.exports = new SessionStorage();