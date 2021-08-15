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

it('校验是否为电话号码', () => {
    StrategyFromTest.addCacheTest('13034833806', { description: 'isQualifiedTel', errorFn: () => console.log("电话号码错误!") });
    expect(StrategyFromTest.start()).toBeTruthy();
})

it('邮箱格式是否正确', () => {
    StrategyFromTest.addCacheTest('1@kk.com', { description: 'isQualifiedEmail', errorFn: () => console.log("邮箱错误!") });
    expect(StrategyFromTest.start()).toBeTruthy();
})

it("值不为空", () => {
    StrategyFromTest.addCacheTest(undefined, { description: 'isValueNoEmpty', errorFn: () => console.log("邮箱错误!") });
    StrategyFromTest.addCacheTest([], { description: 'isValueNoEmpty', errorFn: () => console.log("邮箱错误!") });
    StrategyFromTest.addCacheTest({}, { description: 'isValueNoEmpty', errorFn: () => console.log("邮箱错误!") });
    expect(StrategyFromTest.start()).toBeFalsy();
})

it('密码长度不小于6', () => {
    StrategyFromTest.addCacheTest(123213, {
        description: 'isPaddWordMinLen:6', errorFn: () => {
            console.log('密码长度小于6');
        }
    })
    expect(StrategyFromTest.start()).toBeTruthy();
})

it("errorFn字段可行性", () => {
    StrategyFromTest.addCacheTest('', { description: "isValueNoEmpty" });
    expect(StrategyFromTest.start()).toBeFalsy();
})

it("测试大于或小于", () => {
    StrategyFromTest.addCacheTest(12, { description: "isLessThenValue", value: 13 });
    StrategyFromTest.addCacheTest(12, { description: "isLessThenValue", value: 14 });
    StrategyFromTest.addCacheTest(12, { description: "isGreaterThanValue", value: 11 });
    StrategyFromTest.addCacheTest(12, { description: "isGreaterThanValue", value: 12 });
    expect(StrategyFromTest.start()).toBeFalsy()
})