const StrategyFrom = require('./src/fromTest/strategy');
StrategyFrom.addCacheTest('0001', {
    description: 'isValueNoEmpty', errorFn: () => {
        console.log("值为空!");
    }
});

StrategyFrom.addCacheTest('', [
    { description: 'isValueNoEmpty', errorFn: () => { console.log('电话号码为空!'); } },
    { description: 'isQualifiedTel', errorFn: () => { console.log("电话号码格式错误!"); } }]
);
StrategyFrom.start();

module.exports = {
    StrategyFrom
}
