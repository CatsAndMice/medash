const MathTool = require('../src/mathTool/MathTool');
test('随机获取一个2到6范围的值', () => {
    expect(MathTool.getRangeNumber(2, 6)).toBeGreaterThanOrEqual(2);
    expect(MathTool.getRangeNumber(2, 6)).toBeLessThanOrEqual(6);
})
test('传入的数字小于10时，返回一个两位数的字符串',()=>{
    expect(MathTool.getUseTwoNumberToString(-2)).toBe('02');
})