const Calendar = require('../src/calendar/Calendar'),
    MathTool = require('../src/mathTool/MathTool'),
    DateTime = require('../src/calendar/DateTime');
let curDate = new Date(),
    ymd = `${curDate.getFullYear()}-${MathTool.getUseTwoNumberToString(curDate.getMonth() + 1)}-${MathTool.getUseTwoNumberToString(curDate.getDate())}`,
    ymdAndHm = '',
    ymdAndHms = '';

it('获取月份', () => {
    expect(DateTime.getCurDateMonth()).toBe(DateTime.getCurDateTime().getMonth() + 1);
})

it('测试今天的日历', () => {
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD')).toBe(ymd);
    ymdAndHm = ymd + ` ${curDate.getHours()}:${MathTool.getUseTwoNumberToString(curDate.getMinutes())}`
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm')).toBe(ymdAndHm);
    ymdAndHms = ymdAndHm + `:${MathTool.getUseTwoNumberToString(curDate.getSeconds())}`;
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm:ss')).toBe(ymdAndHms);
})

it('测试不规范的格式', () => {
    expect(Calendar.getStringCalender(curDate.getTime(), 'YYYY-DD-MM hh:mm:ss')).toBeUndefined();
    expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DDhh:mm:')).toBeUndefined();
})

it("测试获取时间戳", () => {
    expect(typeof Calendar.getTime('2012,12,34')).toBe('number');
})

it('格式化毫秒值', () => {
    expect(Calendar.getFormatTime(1001)).toBe('1 second, 1 millisecond');
    expect(Calendar.getFormatTime(34325055574)).toBe('397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds');
})