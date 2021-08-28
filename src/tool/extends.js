const { _error } = require('./index')
module.exports = function (callBacks) {
  if (Object.prototype.toString.call(callBacks) !== '[object Object]') {
    _error('参数仅支持对象')
    return
  }

  const keys = Object.keys(callBacks)
  keys.forEach(key => {
    // 判断扩展方法是否已存在原型上
    if (key in this) {
      _error(key + '已存在原型中,禁止覆盖!')
      return
    }

    const type = typeof callBacks[key]
    if (type === 'function') {
      this[key] = callBacks[key].bind(this)
      return
    }
    this[key] = callBacks[key]
  })
}
