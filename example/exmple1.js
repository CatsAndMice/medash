const FromTest = require('../src/fromTest/FromTest')
const StrategyFromTest = require('../src/fromTest/StrategyFromTest')
FromTest.extends({
  isLessThanTen (dataSource) {
    return dataSource < 10
  }
})

StrategyFromTest.addCacheTest(30, {
  description: 'isLessThanTen',
  errorFn: () => {
    console.log('小于10')
  }
})
console.log(StrategyFromTest.start())
