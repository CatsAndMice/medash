const MyTool = require('../tool'),
    extendsFunc = require('../tool/extends'),
    telReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
    emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
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
        let isArr = Array.isArray(dataSource);
        if (isArr) {
            return dataSource.length !== 0;
        }
        MyTool._warn(`${dataSource}不是Array类型`)
        return false;
    }

    /**
     * 值不为空
     * @param {String|Number} dataSource 值
     * @returns Boolean
     * 
     */
    isValueNoEmpty(dataSource) {
        return dataSource === '' ? false : this.isValueNoUndefined(dataSource);
    }

    /**
     * 
     * @param {any} dataSource 
     * @returns Boolean
     */
    isValueNoUndefined(dataSource) {
        let type = typeof dataSource;
        return type !== "undefined";
    }

    /**
     * 电话号码是否符合正确的格式
     * @param {String} dataSource 电话号码 
     * @returns Boolean
     */
    isQualifiedTel(dataSource) {
        return telReg.test(dataSource);
    }

    /**
     * 电子邮件是否符合正确的格式
     * @param {String} dataSource 邮箱 
     * @returns Boolean 
     */
    isQualifiedEmail(dataSource) {
        return emailReg.test(dataSource);
    }

    /**
     * 值是否相同
     * @param {String | number} dataSource 表单实际值
     * @param {String | number} value 比较大小的目标值 
     * @returns Boolean
     */
    isEqualsValue(dataSource, value) {
        return dataSource === value ? true : false;
    }

    /**
    * 校验表单是否小于某个值
    * @param {String | Number} dataSource 表单实际值
    * @param {String | Number} value 比较大小的目标值 
    */
    isLessThenValue(dataSource, value) {
        return dataSource < value;
    }

    /**
     * 校验表单是否大于某个值
     * @param {String | Number} dataSource 表单实际值
     * @param {String | Number} value 比较大小的目标值 
     * @returns 
     */
    isGreaterThanValue(dataSource, value) {
        return dataSource > value;
    }

    /**
     * 校验密码长度
     * @param {String | Number} dataSource 密码值 
     * @param {Number} value 密码需要的最小长度
     */
    isPaddWordMinLen(dataSource, value) {
        let len = Number(value),
            isNan = Number.isNaN(len),
            isDataSourceLessThenValue = String(dataSource).length < value;
        return isNan ? MyMyTool._warn('传入值无法转化成Number类型,请检查!') : !isDataSourceLessThenValue;
    }

    extends(callBacks) {
        extendsFunc.call(this, callBacks);
    }
}
module.exports = new FromTest();