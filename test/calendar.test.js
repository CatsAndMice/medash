const Calendar = require('../src/calendar/Calendar')
const ExpandNumber = require('../src/expandNumber/ExpandNumber')
const DateTime = require('../src/calendar/DateTime')
const curDate = new Date()

const ymd = `${curDate.getFullYear()}-${ExpandNumber.getUseTwoNumberToString(curDate.getMonth() + 1)}-${ExpandNumber.getUseTwoNumberToString(curDate.getDate())}`
let ymdAndHm = ''
let ymdAndHms = ''

it('获取月份', () => {
  expect(DateTime.getCurDateMonth()).toBe(DateTime.getCurDateTime().getMonth() + 1)
})

it('测试今天的日历', () => {
  expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD')).toBe(ymd)
  ymdAndHm = ymd + ` ${ExpandNumber.getUseTwoNumberToString(curDate.getHours())}:${ExpandNumber.getUseTwoNumberToString(curDate.getMinutes())}`
  expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm')).toBe(ymdAndHm)
  ymdAndHms = ymdAndHm + `:${ExpandNumber.getUseTwoNumberToString(curDate.getSeconds())}`
  expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DD hh:mm:ss')).toBe(ymdAndHms)
})

it('测试不规范的格式', () => {
  expect(Calendar.getStringCalender(curDate.getTime(), 'YYYY-DD-MM hh:mm:ss')).toBeUndefined()
  expect(Calendar.getStringCalender(curDate.getTime(), 'YY-MM-DDhh:mm:')).toBeUndefined()
})

it('测试获取时间戳', () => {
  expect(typeof Calendar.getTime('2012,12,34')).toBe('number')
})

it('格式化毫秒值', () => {
  expect(Calendar.getFormatTime(1001)).toBe('1 second, 1 millisecond')
  expect(Calendar.getFormatTime(34325055574)).toBe('397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds')
})

describe('获取今日,本周,本月的时间戳范围', () => {
  const one = 1000 * 60 * 60 * 24
  it('获取今日的时间戳范围', () => {
    const { start, end } = Calendar.getCurDayTime()
    expect(Calendar.getFormatTime(end - start)).toBe(Calendar.getFormatTime(one))
  })

  it('获取本周的时间戳范围', () => {
    const { start, end } = Calendar.getCurWeekTime()
    expect(Calendar.getFormatTime(end - start)).toBe(Calendar.getFormatTime(one * 7))
  })

  it('获取本月的时间戳范围', () => {
    const { start, end } = Calendar.getCurMonthTime()
    let curDate = new Date()
    curDate.setDate(1)
    curDate.setHours(0)
    curDate.setMinutes(0)
    curDate.setSeconds(0)
    const curMonth = curDate.getMonth()
    curDate.setMonth(curMonth + 1)
    curDate = new Date(curDate.getTime() - 1000 * 60 * 60 * 24)
    expect(Calendar.getFormatTime(end - start)).toBe(Calendar.getFormatTime(one * (curDate.getDate())))
  })

  
})
