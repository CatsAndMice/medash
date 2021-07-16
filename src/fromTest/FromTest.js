class FromTest {
    /**
     * 数组长度不为0
     * @param {*} dataSource 值 
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
     * @param {*} dataSource 值
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
     * 电话号码是否符合正确的格式
     * @param {*} dataSource 电话号码 
     */
    isQualifiedTel(dataSource) {
        return /^1[3568][\d]{9}$/.test(dataSource);
    }

    /**
     * 值是否相同
     * @param {*} dataSource 实际值
     * @param {*} value 目标值 
     * @returns Boolean
     */
    isEqualsValue(dataSource, value) {
        return dataSource === value ? true : false;
    }
}

module.exports = new FromTest();