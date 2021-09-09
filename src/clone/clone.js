// TODO:深克隆，㳀克隆
const FromTest = require('../fromTest/FromTest');
class Clone {
  getClone(origin, target = {}) {
    let isArray = Array.isArray(origin);
    let keys = Object.keys(origin);
    if (isArray) {
      return keys.map(key => origin[key]);
    }
    Object.assign(target, origin);
  }

  getDeelClone(origin, target = {}) {
    let keys = Object.keys(origin);
    for (let index = 0; index < keys.length; index++) {
      let key = keys[index];
      let type = typeof origin[key];
      if (type === "object") {
        let isNull = FromTest.isNull(origin[key])
        if (isNull) {
          target[key] = origin[key];
          continue
        }

        target[key] = Array.isArray(origin[key]) ? this.getDeelClone(origin[key], []) : this.getDeelClone(origin[key]);
        continue
      }
      target[key] = origin[key];
    }

    return target;
  }
}

module.exports = new Clone()
