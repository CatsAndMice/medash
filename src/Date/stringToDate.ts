import lt from "../Function/lt"

const formatTimeReg = /^(\d{4})(?:\D(\d{1,2})\D?)?(?:\D(\d{1,2})\D?)?(?:\s+(?:(\d{1,2})\D?)(?:\D(\d{1,2})\D?)?(?:\D(\d{1,2}))?\D?)?$/
// // 校验日历值是否与实际情况一致
// function _test({ months, days, hours, minutes, seconds }) {
//     const CurDate = new Date()
//     const oneDayTime = 1000 * 60 * 60 * 24
//     CurDate.setMonth(months)
//     CurDate.setDate(1)
//     const maxData = new Date(CurDate.getTime() - oneDayTime).getDate()
//     return lt(months, 13) && lt(days, 32) && lt(days, maxData + 1) && lt(hours, 24) && lt(minutes, 60) && lt(seconds, 60);
// }

function _dealWith(arg) {
    let [year, months = 1, days = 1, hours = 0, minutes = 0, seconds = 0] = arg;
    const curDate = new Date()
    curDate.setFullYear(year)
    curDate.setMonth(Number(months - 1))
    curDate.setDate(days)
    curDate.setHours(hours)
    curDate.setMinutes(minutes)
    curDate.setSeconds(seconds)
    return curDate.getTime()
}

function _replace(dataSource) {
    return dataSource.replace(formatTimeReg, (match, ...arg) => {
        arg.splice(-2)
        return _dealWith(arg)
    })
}

function _stringToTime(arg) {
    return formatTimeReg.test(arg) ? Number(_replace(arg)) : console.warn('时间格式错误!')
}


export default (arg: string) => {
    return arg ? _stringToTime(arg.trim()) : NaN;
}