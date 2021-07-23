const StrategyFromTest = require('../src/fromTest/StrategyFromTest');
test('校验表单', () => {
    let from = '',
        testArr = [1];
    StrategyFromTest.addCacheTest(from, { description: 'isValueNoEmpty', errorFn: () => { console.warn('值为空'); } });
    expect(StrategyFromTest.start()).not.toBeTruthy();
    StrategyFromTest.addCacheTest(undefined, { description: 'isValueNoUndefined', errorFn: () => console.warn('值不能为undefineded') });
    expect(StrategyFromTest.start()).toBeFalsy();
    StrategyFromTest.addCacheTest('undefined', [{ description: 'isEqualsValue:undefined', errorFn: () => console.warn('值不能为undefineded') }, { description: 'isValueNoEmpty', errorFn: () => console.warn('值不能为空') }]);
    expect(StrategyFromTest.start()).toBeTruthy();
    StrategyFromTest.addCacheTest(testArr, [{ description: "islengthNoZero", errorFn: () => console.warn('数组长度为零') }]);
    expect(StrategyFromTest.start()).toBeTruthy();
    StrategyFromTest.addCacheTest('1', { description: "isEqualsValue:1", errorFn: () => console.warn('值不相等') });
    expect(StrategyFromTest.start()).toBeTruthy();
})