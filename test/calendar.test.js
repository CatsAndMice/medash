const Calendar = require('../src/calendar/Calendar'),
    MathTool = require('../src/mathTool/MathTool');
let curDate = new Date(),
    ymd = `${curDate.getFullYear()}-${MathTool.getUseTwoNumberToString(curDate.getMonth() + 1)}-${curDate.getDate()}`,
    ymdAndHm = '',
    ymdAndHms = '';
test('测试获取今天的月份', () => {
    expect(Calendar.getMonth()).toBe(7);
})
test('测试今天的日历', () => {
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD')).toBe(ymd);
    ymdAndHm = ymd + ` ${curDate.getHours()}:${curDate.getMinutes()}`
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm')).toBe(ymdAndHm);
    ymdAndHms = ymdAndHm + `:${curDate.getSeconds()}`;
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm:ss')).toBe(ymdAndHms);
})

test('测试不规范的格式', () => {
    expect(Calendar.getStringCalender(curDate.getTime(), 'YYYY-DD-MM hh:mm:ss')).toBeUndefined();
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DDhh:mm:')).toBeUndefined();
})