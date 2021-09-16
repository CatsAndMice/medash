const { _warn } = require('../tool')
const extendsFunc = require('../tool/extends')
const telReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
/**
 * 表单校验方法类
 * @class
 */
class FromTest {
  /**
     * 数组长度不为0
     * @param {Array} dataSource 值
     * @returns Boolean
     */
  islengthNoZero(dataSource) {
    const isArr = Array.isArray(dataSource)
    if (isArr) {
      return dataSource.length !== 0
    }
    _warn(`${dataSource}不是Array类型`)
    return false
  }

  /**
     * 值不为空
     * @param {String|Number} dataSource 值
     * @returns Boolean
     *
     */
  isValueNoEmpty(dataSource) {
    return dataSource === '' ? false : this.isValueNoUndefined(dataSource)
  }

  /**
     *
     * @param {any} dataSource
     * @returns Boolean
     */
  isValueNoUndefined(dataSource) {
    const type = typeof dataSource
    return type !== 'undefined'
  }

  /**
     * 电话号码是否符合正确的格式
     * @param {String} dataSource 电话号码
     * @returns Boolean
     */
  isQualifiedTel(dataSource) {
    return telReg.test(dataSource)
  }

  /**
     * 电子邮件是否符合正确的格式
     * @param {String} dataSource 邮箱
     * @returns Boolean
     */
  isQualifiedEmail(dataSource) {
    return emailReg.test(dataSource)
  }

  /**
     * 值是否相同
     * @param {String | number} dataSource 表单实际值
     * @param {String | number} value 比较大小的目标值
     * @returns Boolean
     */
  isEqualsValue(dataSource, value) {
    if (dataSource === value) {
      return true;
    }

    //比较类型为Date对象时，比较时间戳格式值
    if (dataSource instanceof Date && value instanceof Date) {
      return dataSource.getTime() === value.getTime();
    }

    //其中有一个值为空，则不相等
    //排除值为空，或值为引用值的可能性
    if (!dataSource || !value || (typeof dataSource !== "object" && typeof value !== "object")) {
      return dataSource === value;
    }

    //引用类型
    if (dataSource.prototype !== value.prototype) return false;
    const keys = Object.keys(dataSource);
    if (keys.length !== value.length) return false;
    return keys.every(key => this.isEqualsValue(dataSource[key], value[key]));
  }

  /**
    * 校验表单是否小于某个值
    * @param {String | Number} dataSource 表单实际值
    * @param {String | Number} value 比较大小的目标值
    */
  isLessThenValue(dataSource, value) {
    return dataSource < value
  }

  /**
     * 校验表单是否大于某个值
     * @param {String | Number} dataSource 表单实际值
     * @param {String | Number} value 比较大小的目标值
     * @returns
     */
  isGreaterThanValue(dataSource, value) {
    return dataSource > value
  }

  /**
     * 校验密码长度
     * @param {String | Number} dataSource 密码值
     * @param {Number} value 密码需要的最小长度
     */
  isPaddWordMinLen(dataSource, value) {
    const len = Number(value)
    const isNan = Number.isNaN(len)
    const isDataSourceLessThenValue = String(dataSource).length < value
    return isNan ? _warn('传入值无法转化成Number类型,请检查!') : !isDataSourceLessThenValue
  }

  isNull(dataSource) {
    let type = typeof dataSource;
    return this.isEqualsValue(type, "object") && this.isEqualsValue(dataSource, null);
  }

  extends(callBacks) {
    extendsFunc.call(this, callBacks)
  }
}
module.exports = new FromTest()
