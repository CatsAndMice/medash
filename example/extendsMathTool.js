const ExpandNumber = require('../src/ExpandNumber/ExpandNumber')
ExpandNumber.extends({
  getNum(num) {
    return num / 2
  }
})

console.log(ExpandNumber.getNum(1))
