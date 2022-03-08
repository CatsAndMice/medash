import isEmpty from "../Functions/isEmpty"
import getGtTenStr from "../Functions/getGtTenStr"
import getYmdHms from "./getYmdHms"

const ymdReg = /^(YYYY).(MM).(DD).?$/
const hmsReg = /^(hh).(mm).(ss).?$/
const dateReg = /^(YYYY).(MM).(DD).?\s(hh).(mm).?(ss)?.?$/
let curDate

function _createHMSArray() {
    let { hours, minutes, seconds } = getYmdHms(curDate)
    return [hours, minutes, seconds]
}

function _createYMDArray() {
    let { year, month, date } = getYmdHms(curDate)
    return [year, month + 1, date]
}

function _createArray(format, captures) {
    let date
    if (captures.length === 6) {
        date = _createYMDArray().concat(_createHMSArray());
    } else {
        date = ymdReg.test(format) ? _createYMDArray() : _createHMSArray()
    }
    return captures.map((val, index) => {
        return { key: val, value: getGtTenStr(date[index]) }
    })
}

/**
   * 获取返回时间格式对应的时间字符串
   * @param {*} format 时间格式
   * @param {*} reg 正则
   * @returns String
   */
function _getReplaceFormat(format: string, reg) {
    if (!reg) {
        console.warn(`${format}格式不正确`)
        return
    }
    return format.replace(reg, (match, ...captures) => {
        captures.splice(-2)
        const strs = _createArray(format, captures)
        return strs.map((str) => {
            const { key, value } = str
            match = match.replace(key, value)
            return match
        }).pop()
    })
}

export default (args: Date | number, format: string = 'YYYY.MM.DD hh:mm:ss') => {
    const regs = [ymdReg, hmsReg, dateReg];
    if (isEmpty(args)) {
        curDate = new Date()
    } else {
        curDate = args instanceof Date ? args : new Date(Number(args))
    }

    return _getReplaceFormat(format, regs.find(reg => reg.test(format)))
}