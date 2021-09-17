const { _error } = require('../tool')
const FromTest = require('../fromTest/FromTest');
class ExpandArray extends Array {
  constructor() {
    super();
  }

  /**
   * 
   * @param {Array} data 
   * @param  {Array} params 
   * @returns Array
   */
  format(data = [], ...params) {
    if (!Array.isArray(data)) {
      _error('参数类型错误,仅支持数组类型!')
      return
    }
    params = params.flat(Infinity)
    return data.map(val => {
      const formatObj = {}
      params.forEach(param => {
        const { attrName, formatName, skipValue } = param
        const isNoEquals = !FromTest.isEqualsValue(val[attrName], skipValue)
        if (isNoEquals) {
          formatObj[formatName] = val[attrName]
        }
      })
      return formatObj
    })
  }
}


module.exports = new ExpandArray()
