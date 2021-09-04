const DateTime = require('./DateTime')
const { _warn } = require('../tool/index')
const StrategyFromTest = require('../fromTest/StrategyFromTest')
const seven = 7// 一周7天
const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000
const formatTimeReg = /^(\d{4})(?:\D(\d{1,2})\D?)?(?:\D(\d{1,2})\D?)?(?:\s+(?:(\d{1,2})\D?)(?:\D(\d{1,2})\D?)?(?:\D(\d{1,2}))?\D?)?$/
class FormatTime {
  // 校验日历值是否与实际情况一致
  _test ({ months, days, hours, minutes, seconds }) {
    const CurDate = DateTime.getCurDateTime()
    const oneDayTime = 1000 * 60 * 60 * 24
    CurDate.setMonth(months)
    CurDate.setDate(1)
    const maxData = new Date(CurDate.getTime() - oneDayTime).getDate()
    StrategyFromTest.addCacheTest(months, { description: 'isLessThenValue', value: 13, errorFn: () => _warn('月份不应超出12个月!') })
    StrategyFromTest.addCacheTest(days, [
      { description: 'isLessThenValue', value: 32, errorFn: () => _warn('日期不应大于31号!') },
      // 该校验日期不应大于当月的最大日期
      { description: 'isLessThenValue', value: maxData + 1, errorFn: () => _warn(`日期不应大于${months}月最大日期${maxData}!`) }
    ])
    StrategyFromTest.addCacheTest(hours, { description: 'isLessThenValue', value: 24, errorFn: () => _warn('小时不应超过24!') })
    StrategyFromTest.addCacheTest(minutes, { description: 'isLessThenValue', value: 60, errorFn: () => _warn('分钟不应超出60分钟!') })
    StrategyFromTest.addCacheTest(seconds, { description: 'isLessThenValue', value: 60, errorFn: () => _warn('秒不应超出60秒!') })
    return StrategyFromTest.start()
  }

  _dealWith ([year, months = 1, days = 1, hours = 0, minutes = 0, seconds = 0]) {
    const curDate = DateTime.getCurDateTime()
    if (this._test({ months, days, hours, minutes, seconds })) {
      curDate.setFullYear(year)
      curDate.setMonth(Number(months - 1))
      curDate.setDate(days)
      curDate.setHours(hours)
      curDate.setMinutes(minutes)
      curDate.setSeconds(seconds)
    }
    return curDate.getTime()
  }

  _replace (dataSource) {
    return dataSource.replace(formatTimeReg, (match, ...arg) => {
      arg.splice(-2)
      return this._dealWith(arg)
    })
  }

  _stringToTime (dataSource) {
    return formatTimeReg.test(dataSource) ? Number(this._replace(dataSource)) : _warn('时间格式错误!')
  }

  getTime (dataSource) {
    return dataSource ? this._stringToTime(dataSource.trim()) : DateTime.getCurDateMs()
  }

  /**
     * 格式化时间戳，返回 *day *hour *minute *second
     * @param {Number} ms 时间戳
     * @returns
     */
  getFormatTime (ms) {
    ms = Math.abs(ms)
    const params = {
      day: Math.floor(ms / day),
      hour: Math.floor(ms / hour) % 24,
      minute: Math.floor(ms / minute) % 60,
      second: Math.floor(ms / second) % 60,
      millisecond: Math.floor(ms) % 1000
    }
    return Object.entries(params).filter(val => val[1] !== 0).map(([key, val]) => `${val} ${key}${val === 1 ? '' : 's'}`).join(', ')
  }

  setAndReturnDaTe () {
    const curDate = new Date()
    curDate.setHours(0)
    curDate.setSeconds(0)
    curDate.setMinutes(0)
    return curDate
  }

  /**
   * 获取今日的时间戳范围
   */
  getCurDayTime () {
    const curTime = this.setAndReturnDaTe()
    const start = curTime.getTime()
    return {
      start,
      end: start + day
    }
  }

  /**
   * 获取本周时间戳范围
   */
  getCurWeekTime () {
    const curTime = this.setAndReturnDaTe()
    let curDay = curTime.getDay()
    curDay = curDay > 0 ? curDay : seven
    const start = curTime.getTime() - ((seven - curDay) * day)
    return {
      start,
      end: start + seven * day
    }
  }

  getCurMonthTime () {
    const curTime = this.setAndReturnDaTe()
    curTime.setDate(1)
    const start = curTime.getTime()
    const month = curTime.getMonth()
    curTime.setMonth(month + 1)
    return {
      start,
      end: curTime.getTime()
    }
  }
}
module.exports = new FormatTime()
