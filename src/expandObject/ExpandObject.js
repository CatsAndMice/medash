const FromTest = require('../fromTest/FromTest');
const { _warn } = require('../tool');
class ExpandObject {
  getClone(origin, target = {}) {
    let isArray = Array.isArray(origin);
    let keys = Object.keys(origin);
    if (isArray) {
      return keys.map(key => origin[key]);
    }
    return Object.assign(target, origin);
  }

  getDeelClone(origin, target = {}) {
    let keys = Object.keys(origin);
    for (let index = 0; index < keys.length; index++) {
      let key = keys[index];
      let value = origin[key]
      let type = typeof value;
      if (type === "object") {
        let isNull = FromTest.isNull(value)
        if (isNull) {
          target[key] = value;
          continue
        }

        //Date
        if (value instanceof Date) {
          target[key] = new Date(value.getTime())
          continue
        }

        //正则
        if (value instanceof RegExp) {
          target[key] = new RegExp(value)
          continue
        }

        try {
          //dom
          if (value instanceof Element) {
            target[key] = value.cloneNode(true);
            continue
          }
        } catch {
          _warn('该运行环境中没有DOM元素')
        }


        target[key] = Array.isArray(value) ? this.getDeelClone(value, []) : this.getDeelClone(value);
        continue
      }
      target[key] = value;
    }

    return target;
  }
}
module.exports = new ExpandObject()
