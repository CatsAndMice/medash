const { isValueNoEmpty } = require('../tool')
const StrategyFromTest = require('../fromTest/StrategyFromTest')
class ModuleStorage {
  _isKey (key) {
    StrategyFromTest.addCacheTest(key, Object.assign(isValueNoEmpty, { errorFn: () => console.warn('key值不能为空') }))
    return StrategyFromTest.start()
  }

  _isValue (value) {
    StrategyFromTest.addCacheTest(value, Object.assign(isValueNoEmpty, { errorFn: () => console.warn('value值不能为空') }))
    return StrategyFromTest.start()
  }

  _warn () {
    console.warn('webStorge仅适用于浏览器环境')
    return false
  }

  _isHaveStoarge () {
    return this.Storage ? true : this._warn()
  }

  _isHaveStoargeAndKey (key) {
    return this._isHaveStoarge() ? this._isKey(key) : false
  }

  setItem () {
    throw new Error('抽象方法setItem不能直接调用')
  }

  getItem () {
    throw new Error('抽象方法getItem不能直接调用')
  }

  removeItem () {
    throw new Error('抽象方法removeItem不能直接调用')
  }

  clear () {
    throw new Error('抽象方法clear不能直接调用')
  }
}
module.exports = ModuleStorage
