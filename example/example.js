const { FromTest, StrategyFrom } = require('../main')
FromTest.extends({
  // 校验数值是否为NaN
  isNumNoEqualsNan (num) {
    return !Number.isNaN(Number(num))
  }
})

StrategyFrom.addCacheTest('w', { description: 'isNumNoEqualsNan' })
console.log(StrategyFrom.start())

StrategyFrom.addCacheTest('2', { description: 'isNumNoEqualsNan' })
console.log(StrategyFrom.start())// false
