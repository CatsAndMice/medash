import getCalender from "../../src/Date/getCalender";
import getGtTenStr from "../../src/Functions/getGtTenStr";
const curDate = new Date()
let ymd = `${curDate.getFullYear()}-${getGtTenStr(curDate.getMonth() + 1)}-${getGtTenStr(curDate.getDate())}`
let ymdAndHm = ''
let ymdAndHms = ''
describe('日历', () => {
    it('getCalender', () => {
        expect(getCalender(curDate.getTime(), 'YYYY-MM-DD')).toBe(ymd)
        ymdAndHm = ymd + ` ${getGtTenStr(curDate.getHours())}:${getGtTenStr(curDate.getMinutes())}`
        expect(getCalender(curDate.getTime(), 'YYYY-MM-DD hh:mm')).toBe(ymdAndHm)
        ymdAndHms = ymdAndHm + `:${getGtTenStr(curDate.getSeconds())}`
        expect(getCalender(curDate.getTime())).toBe(ymdAndHms.replace(/-/g, '.'))
    })

    it('空值测试', () => {
        expect(getCalender(0, 'YYYY-MM-DD')).toBe(ymd);
    })

    it('测试不规范的格式', () => {
        expect(getCalender(curDate.getTime(), 'YY-DD-MM hh:mm:ss')).toBeUndefined()
        expect(getCalender(curDate.getTime(), 'YY-MM-DDhh:mm:')).toBeUndefined()
    })
})
