const Calendar = require('../src/calendar/Calendar'),
    MathTool = require('../src/mathTool/MathTool'),
    DateTime = require('../src/calendar/DateTime');
let curDate = new Date(),
    ymd = `${curDate.getFullYear()}-${MathTool.getUseTwoNumberToString(curDate.getMonth() + 1)}-${MathTool.getUseTwoNumberToString(curDate.getDate())}`,
    ymdAndHm = '',
    ymdAndHms = '';

test('获取月份', () => {
    expect(DateTime.getCurDateMonth()).toBe(DateTime.getCurDateTime().getMonth() + 1);
})

test('测试今天的日历', () => {
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD')).toBe(ymd);
    ymdAndHm = ymd + ` ${curDate.getHours()}:${MathTool.getUseTwoNumberToString(curDate.getMinutes())}`
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm')).toBe(ymdAndHm);
    ymdAndHms = ymdAndHm + `:${curDate.getSeconds()}`;
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm:ss')).toBe(ymdAndHms);
})

test('测试不规范的格式', () => {
    expect(Calendar.getStringCalender(curDate.getTime(), 'YYYY-DD-MM hh:mm:ss')).toBeUndefined();
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DDhh:mm:')).toBeUndefined();
})

it("测试获取时间戳", () => {
    expect(typeof Calendar.getTime('2012,12,34')).toBe('number');
})