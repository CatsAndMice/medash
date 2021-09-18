const { _error } = require('../tool')
const FromTest = require('../fromTest/FromTest');
const ExpandObject = require('../expandObject/ExpandObject');
class ExpandArray extends Array {
  constructor() {
    super();
  }

  //格式化数组成自定义格式
  format(data = [], params, isClone = false) {
    if (!Array.isArray(data)) {
      _error('参数类型错误,仅支持数组类型!')
      return
    }

    if (!Array.isArray(params)) {
      params = [params];
    }

    params = params.flat(Infinity)
    return data.map(val => {
      const formatObj = {}
      params.forEach(param => {
        const { attr, formatName, skipValue } = param
        const isNoEquals = !FromTest.isEqualsValue(val[attr], skipValue)
        if (isNoEquals) {
          let type = typeof val[attr];
          let isObject = type === "object";
          formatObj[formatName] = isClone && isObject ? ExpandObject.getDeelClone(val[attr]) : val[attr]
        }
      })

      if (FromTest.islengthNoZero(Object.keys(formatObj))) {
        return formatObj;
      }
    }).filter(val => FromTest.isValueNoUndefined(val));
  }
}


module.exports = new ExpandArray()
