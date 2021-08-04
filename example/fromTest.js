const FromTest = require('../src/fromTest/FromTest');
const StrategyFromTest = require('../src/fromTest/StrategyFromTest');
console.log(FromTest.isLessThenValue(2, 2));
StrategyFromTest.addCacheTest(1, { description: 'isLessThenValue', value: 2 })
console.log(StrategyFromTest.start());