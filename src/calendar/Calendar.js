const FormatTime = require('./FormatTime'),
    extendsFunc = require('../tool/extends'),
    { _warn } = require('../tool/index'),
    StringCalender = require('./StringCalender');
class Calendar {
    /**
     * 
     * @param {*} dateTime 时间
     * @param {*} format 时间格式  默认时间格式YY.MM.DD hh:mm:ss 可选YY.MM.DD或hh:mm:ss
     * @returns String
     */
    getStringCalender(dateTime, format = 'YY.MM.DD hh:mm:ss') {
        return StringCalender.getStringCalender(dateTime, format);
    }

    /**
     * 获取返回日历模版对应的时间戳
     * @param {String} dataSource 日历模版
     * @returns Number
     */
    getTime(dataSource) {
        return FormatTime.getTime(dataSource);
    }

    getFormatTime(time) {
        return Number.isNaN(Number(time)) ? _warn(`请传入正确的时间戳格式!`) : FormatTime.getFormatTime(time);
    }

    extends(callBacks) {
        extendsFunc.call(this, callBacks)
    }
}

module.exports = new Calendar();