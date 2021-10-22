const extendsFunc = require('../tool/extends')
class ExpandNumber extends Number {
  getRangeNumber(min, max) {
    return max > min ? Math.round((Math.random() * (max - min)) + min) : console.warn('max值小于min,参数不合法!')
  }

  /**
     * 返回一个两位数的字符串,传入的数字小于10进行拼接
     * @param {Number} num 传入的数字
     * @returns String
     */
  getUseTwoNumberToString(num) {
    const absNum = Math.abs(num)
    return absNum < 10 ? `0${absNum}` : String(absNum)
  }

  /**
     * 将数字转换成一个千位符并返回
     * @param {Number} num 传入数字
     * @param {String} char 千位字符
     * @returns String
     */
  getThousandsChar(num, char = ',') {
    if (num < 1000) {
      return String(num)
    }
    // Number.prototype.toLocaleString 可实现千位符
    // 去除小数点后面的数
    const numStrs = String(num).split('.')
    const thousandsChar = numStrs[0].replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
      return $1 + char
    })
    return numStrs[1] ? [thousandsChar, numStrs[1]].join('.') : thousandsChar
  }

  extends(callBacks) {
    extendsFunc.call(this, callBacks)
  }
}

module.exports = new ExpandNumber()
