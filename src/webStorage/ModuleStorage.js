const { isValueNoUndefined, isValueNoEmpty } = require('./TestMethods'),
    StrategyFromTest = require('../fromTest/StrategyFromTest');
class ModuleStorage {
    _isKey(key) {
        StrategyFromTest.addCacheTest(key, [
            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('key值不能为undefined') }),
            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('key值不能为空') })]);
        return StrategyFromTest.start();
    }

    _warn() {
        console.warn('webStorge仅适用于浏览器环境');
        return false;
    }

    _isHaveStoargeAndKey(key) {
        return this.Storage ? this._isKey(key) : this._warn();
    }

    setItem() {
        throw new Error('抽象方法setItem不能直接调用');
    }

    getItem() {
        throw new Error('抽象方法getItem不能直接调用');
    }

    removeItem() {
        throw new Error('抽象方法removeItem不能直接调用');
    }
    clear() {
        throw new Error('抽象方法clear不能直接调用');
    }

}
module.exports = ModuleStorage;