const FromTest = require('./FromTest')
const MyTool = require('../tool')

/**
 * 调用表单校验策略类
 * @class
 */
class StrategyFromTest {
  constructor (FromTest) {
    this.FromTest = FromTest
    this.cacheTest = []
  }

  _clearCache () {
    this.cacheTest.length = 0
  }

  _triggerErrorFn (fn) {
    this._clearCache()
    fn()
    return false
  }

  _moreConfig (dataSource, config) {
    for (const conf of config) {
      this._oneConfig(dataSource, conf)
    }
  }

  _oneConfig (dataSource, config) {
    const { description, errorFn = function () { } } = config
    let [methodName, value] = description.split(':')
    // 传入value优先级比截取高
    value = config.value ? config.value : value
    this.cacheTest.push({ dataSource, methodName, value, errorFn })
  }

  /**
     * 开始校验表单
     * @returns Boolean
     */
  start () {
    if (!this.cacheTest.length) return
    while (this.cacheTest.length) {
      const test = this.cacheTest.shift()
      const { dataSource, methodName, value, errorFn } = test
      const isHaveMehtod = methodName in this.FromTest
      if (isHaveMehtod) {
        if (!this.FromTest[methodName](dataSource, value)) {
          return this._triggerErrorFn(errorFn)
        }
      } else {
        this._clearCache()
        return MyTool._warn(`${methodName}访方法不存在`)
      }
    }
    return true
  }

  /**
     * 表单校验添加至缓存区
     * @param {any} dataSource 需要校验表单值
     * @param {Object | [Object]} config 表单需要满足的要求
     */
  addCacheTest (dataSource, config) {
    const isArr = Array.isArray(config)
    isArr ? this._moreConfig(dataSource, config) : this._oneConfig(dataSource, config)
  }
}

module.exports = new StrategyFromTest(FromTest)
