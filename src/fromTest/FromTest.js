class FromTest {
    islengthEqualsLen(dataSource, len) {
        let isArr = Array.isArray(dataSource);
        if (isArr) {
            return dataSource.length == len ? true : false;
        }
        console.warn(`${dataSource}不是Array类型`);
        return false;
    }
}

module.exports = new FromTest();