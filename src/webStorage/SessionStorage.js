const ModuleStorage = require('./ModuleStorage');
class SessionStorage extends ModuleStorage {
    constructor() {
        super();
        this.Storage = window.sessionStorage;
    }
    _isKey(key) {
        StrategyFromTest.addCacheTest(key, [
            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('key值不能为undefined') }),
            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('key值不能为空') })]);
        return StrategyFromTest.start();
    }

    setItem(key, value) {
        StrategyFromTest.addCacheTest(value, [
            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('value值不能为undefined') }),
            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('value值不能为空') })]);
        _isKey(key) ? this.Storage.setItem(key, JSON.stringify(value)) : null;
    }

    getItem(key) {
        return this._isKey(key) ? JSON.parse(this.Storage.getItem(key)) : null;
    }

    removeItem(key) {
        return this._isKey(key) ? this.Storage.removeItem(key) : null;
    }

    clear() {
        return this.Storage.clear();
    }
}

module.exports = new SessionStorage();