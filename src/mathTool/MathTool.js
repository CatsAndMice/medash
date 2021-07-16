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
}

module.exports = new MathTool();