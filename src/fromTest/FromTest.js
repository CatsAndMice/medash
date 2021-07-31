const telReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
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
            return dataSource.length === 0 ? false : true;
        }
        console.warn(`${dataSource}不是Array类型`);
        return false;
    }

    /**
     * 值不为空
     * @param {String|Number} dataSource 值
     * @returns Boolean
     * 
     */
    isValueNoEmpty(dataSource) {
        let types = ['string', 'number'],
            type = typeof dataSource;
        if (types.includes(type)) {
            return dataSource == '' ? false : true;
        }
        console.warn(`${dataSource}类型不是string或number`);
        return false;
    }

    /**
     * 
     * @param {any} dataSource 
     * @returns 
     */
    isValueNoUndefined(dataSource) {
        let type = typeof dataSource;
        return type === "undefined" ? false : true;
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
     * @param {any} dataSource 实际值
     * @param {String} value 目标值 
     * @returns Boolean
     */
    isEqualsValue(dataSource, value) {
        return dataSource === value ? true : false;
    }
}
module.exports = new FromTest();