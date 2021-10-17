const { _warn } = require('../tool')
const extendsFunc = require('../tool/extends')
const telReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
class FromTest {
  islengthNoZero(dataSource) {
    const isArr = Array.isArray(dataSource)
    if (isArr) {
      return dataSource.length !== 0
    }
    console.warn(`${dataSource}不是Array类型`);
    return false
  }

  //0,null,'',undefined 均认为成空值
  isValueNoEmpty(dataSource) {
    let isNoNull = !this.isNull(dataSource);
    let isNoUndefined = this.isValueNoUndefined(dataSource)
    let isNoEqualsStr = !this.isEqualsValue(dataSource, "");
    let isNoZero = !this.isEqualsValue(dataSource, 0)
    return isNoNull && isNoUndefined && isNoEqualsStr && isNoZero;
  }

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

  isLessThenValue(dataSource, value) {
    return dataSource < value
  }

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
    return isNan ? console.warn('传入值无法转化成Number类型,请检查!') : !isDataSourceLessThenValue
  }

  //密码是否满足安全性
  isSafePaddWord(dataSource) {
    let reg = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,}(.*)?[A-Z]{1,})(?=.*[a-z]{1,}(.*)?[a-z]{1,})(?=.*[!@#$%^&*?]).*$/
    return reg.test(dataSource);
  }

  isNull(dataSource) {
    let type = typeof dataSource;
    return this.isEqualsValue(type, "object") && this.isEqualsValue(dataSource, null);
  }

  isBrowser() {
    let type = typeof window;
    return type !== 'undefined';
  }

  isFunc(callBack) {
    return typeof callBack === "function";
  }

  extends(callBacks) {
    extendsFunc.call(this, callBacks)
  }
}
module.exports = new FromTest()
