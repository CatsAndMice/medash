/**
 * 处理数字类
 */
class MathTool {
    /**
     * 随机获取一个范围内的值
     * @param {*} min 最小值
     * @param {*} max 最大值 
     * @returns Number
     */
    getRangeNumber(min, max) {
        return Math.round((Math.random() * (max - min)) + min);
    }

    /**
     * 返回一个两位数的字符串,传入的数字小于10进行拼接
     * @param {*} num 传入的数字
     * @returns String
     */
    getUseTwoNumberToString(num) {
        return num < 10 ? `0${num}` : String(num);
    }
}

module.exports = new MathTool();