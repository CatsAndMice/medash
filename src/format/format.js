const { _error } = require('../tool')

class Format {
  format (data = [], ...param) {
    if (!Array.isArray(data)) {
      _error('参数类型错误,仅支持数组类型!')
      return
    }
    
    param = param.flat(Infinity)
    return data.map(val => {
      const formatObj = {}
      param.forEach(param => {
        const { attrName, formatName } = param
        formatObj[formatName] = val[attrName]
      })
      return formatObj
    })
  }
}

module.exports = new Format()
