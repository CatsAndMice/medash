const MathTool = require('../MathTool');
test('随机获取一个2到6范围的值', () => {
    expect(MathTool.getRangeNumber(2, 6)).toBeGreaterThanOrEqual(2);
    expect(MathTool.getRangeNumber(2, 6)).toBeLessThanOrEqual(6);
})
test('传入的数字小于10时，返回一个两位数的字符串', () => {
    expect(MathTool.getUseTwoNumberToString(-2)).toBe('02');
})
test('数字转化成一个千位符', () => {
    expect(MathTool.getThousandsChar(1000.01)).toBe('1,000.01');
    expect(MathTool.getThousandsChar(320345.2435,"&")).toBe('320&345.2435')
})