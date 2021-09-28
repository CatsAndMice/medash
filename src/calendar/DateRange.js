const { seven, day } = require('./const')
class DateRange {
    setAndReturnDaTe() {
        const curDate = new Date()
        curDate.setHours(0)
        curDate.setSeconds(0)
        curDate.setMinutes(0)
        return curDate
    }

    /**
     * 获取今日的时间戳范围
     */
    getCurDayTime() {
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
    getCurWeekTime() {
        const curTime = this.setAndReturnDaTe()
        let curDay = curTime.getDay()
        curDay = curDay > 0 ? curDay : seven
        const start = curTime.getTime() - (curDay - 1) * day
        return {
            start,
            end: start + seven * day
        }
    }

    getCurMonthTime() {
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

module.exports = new DateRange()