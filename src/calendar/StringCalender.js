const { _warn } = require('../tool/index')
const MathTool = require('../mathTool/MathTool')
const DateTime = require('./DateTime')
const ymdReg = /^(YY).(MM).(DD).?$/
const hmsReg = /^(hh).(mm).(ss).?$/
const dateReg = /^(YY).(MM).(DD).?\s(hh).(mm).?(ss)?.?$/
class StringCalender {
  _createHMSArray () {
    return [this.CurDate.getHours(), this.CurDate.getMinutes(), this.CurDate.getSeconds()]
  }

  _createYMDArray () {
    return [this.CurDate.getFullYear(),this.CurDate.getMonth()+1, this.CurDate.getDate()]
  }

  _createArray (format, captures) {
    let date = null
    if (captures.length === 6) {
      date = [].concat(this._createYMDArray(), this._createHMSArray())
    } else {
      date = ymdReg.test(format) ? this._createYMDArray() : this._createHMSArray()
    }
    return captures.map((val, index) => {
      return { key: val, value: MathTool.getUseTwoNumberToString(date[index]) }
    })
  }

  /**
    * 获取返回时间格式对应的时间字符串
    * @param {*} format 时间格式
    * @param {*} reg 正则
    * @returns String
    */
  _getReplaceFormat (format, reg) {
    if (!reg) {
      _warn(`${format}格式不正确`)
      return
    }
    return format.replace(reg, (match, ...captures) => {
      captures.splice(-2)
      const strs = this._createArray(format, captures)
      return strs.map((str) => {
        const { key, value } = str
        match = match.replace(key, value)
        return match
      }).pop()
    })
  }

  getStringCalender (dateTime, format = 'YY.MM.DD hh:mm:ss') {
    this.CurDate = dateTime ? DateTime.setAndReturnDateTime(dateTime) : DateTime.getCurDateTime()
    const regs = [ymdReg, hmsReg, dateReg]
    return this._getReplaceFormat(format, regs.find(reg => reg.test(format)))
  }
}

module.exports = new StringCalender()
