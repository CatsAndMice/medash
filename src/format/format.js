const { _error } = require('../tool')

class Format {
  format (data = [], ...params) {
    if (!Array.isArray(data)) {
      _error('参数类型错误,仅支持数组类型!')
      return
    }
    
    params = params.flat(Infinity)
    return data.map(val => {
      const formatObj = {}
      params.forEach(param => {
        const { attrName, formatName } = param
        formatObj[formatName] = val[attrName]
      })
      return formatObj
    })
  }
}

module.exports = new Format()
