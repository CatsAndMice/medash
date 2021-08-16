const MathTool = require('../mathTool/MathTool'),
    StrategyFromTest = require('../fromTest/StrategyFromTest'),
    FormatTime = require('./FormatTime'),
    extendsFunc = require('../tool/extends'),
    MyTool = require('../tool'),
    ymdReg = /^(YY).(MM).(DD).?$/,
    hmsReg = /^(hh).(mm).(ss).?$/,
    dateReg = /^(YY).(MM).(DD).?\s(hh).(mm).?(ss)?.?$/,
    formatTimeReg = /^(\d{4})(?:\D(\d{1,2})\D?)?(?:\D(\d{1,2})\D?)?(?:\s+(?:(\d{1,2})\D?)(?:\D(\d{1,2})\D?)?(?:\D(\d{1,2}))?\D?)?$/;
class Calendar {

    _getCurDate() {
        return new Date();
    }

    getMonth() {
        const month = this.CurDate ? this.CurDate.getMonth() : this._getCurDate().getMonth();
        return month + 1;
    }

    _createYMDArray() {
        return [this.CurDate.getFullYear(), this.getMonth(), this.CurDate.getDate()];
    }

    _createHMSArray() {
        return [this.CurDate.getHours(), this.CurDate.getMinutes(), this.CurDate.getSeconds()];
    }

    _createArray(format, captures) {
        let date = null;
        if (captures.length === 6) {
            date = [].concat(this._createYMDArray(), this._createHMSArray());
        } else {
            date = ymdReg.test(format) ? this._createYMDArray() : this._createHMSArray();
        }
        return captures.map((val, index) => {
            return { key: val, value: MathTool.getUseTwoNumberToString(date[index]) };
        })
    }

    _warn(text) {
        console.warn(text);
    }

    /**
     * 获取返回时间格式对应的时间字符串
     * @param {*} format 时间格式
     * @param {*} reg 正则
     * @returns String
     */
    _getReplaceFormat(format, reg) {
        if (!reg) {
            this._warn(`${format}格式不正确`);
            return
        }
        return format.replace(reg, (match, ...captures) => {
            captures.splice(-2);
            const strs = this._createArray(format, captures);
            return strs.map((str) => {
                const { key, value } = str;
                match = match.replace(key, value);
                return match;
            }).pop();
        })
    }

    /**
     * 
     * @param {*} dateTime 时间
     * @param {*} format 时间格式  默认时间格式YY.MM.DD hh:mm:ss 可选YY.MM.DD或hh:mm:ss
     * @returns String
     */
    getStringCalender(dateTime, format = 'YY.MM.DD hh:mm:ss') {
        this.CurDate = dateTime ? new Date(dateTime) : this._getCurDate();
        const regs = [ymdReg, hmsReg, dateReg];
        return this._getReplaceFormat(format, regs.find(reg => reg.test(format)));
    }

    //校验日历值是否与实际情况一致
    _test({ months, days, hours, minutes, seconds }) {
        const CurDate = this._getCurDate(),
            oneDayTime = 1000 * 60 * 60 * 24;
        CurDate.setMonth(months);
        CurDate.setDate(1);
        const maxData = new Date(CurDate.getTime() - oneDayTime).getDate();
        StrategyFromTest.addCacheTest(months, { description: "isLessThenValue", value: 13, errorFn: () => MyTool._warn('月份不应超出12个月!') });
        StrategyFromTest.addCacheTest(days, [
            { description: "isLessThenValue", value: 32, errorFn: () => MyTool._warn('日期不应大于31号!') },
            //该校验日期不应大于当月的最大日期
            { description: "isLessThenValue", value: maxData + 1, errorFn: () => MyTool._warn(`日期不应大于${months}月最大日期${maxData}!`) }
        ]);
        StrategyFromTest.addCacheTest(hours, { description: "isLessThenValue", value: 24, errorFn: () => MyTool._warn('小时不应超过24!') });
        StrategyFromTest.addCacheTest(minutes, { description: "isLessThenValue", value: 60, errorFn: () => MyTool._warn('分钟不应超出60分钟!') });
        StrategyFromTest.addCacheTest(seconds, { description: "isLessThenValue", value: 60, errorFn: () => MyTool._warn('秒不应超出60秒!') });
        return StrategyFromTest.start();
    }

    _dealWith([year, months = 1, days = 1, hours = 0, minutes = 0, seconds = 0]) {
        const curDate = this._getCurDate();
        if (this._test({ months, days, hours, minutes, seconds })) {
            curDate.setFullYear(year);
            curDate.setMonth(Number(months - 1));
            curDate.setDate(days);
            curDate.setHours(hours);
            curDate.setMinutes(minutes);
            curDate.setSeconds(seconds);
        }
        return curDate.getTime();
    }

    _replace(dataSource) {
        return dataSource.replace(formatTimeReg, (match, ...arg) => {
            arg.splice(-2);
            return this._dealWith(arg);
        })
    }

    _stringToTime(dataSource) {
        return formatTimeReg.test(dataSource) ? Number(this._replace(dataSource)) : this._warn('时间格式错误!');
    }

    /**
     * 获取返回日历模版对应的时间戳
     * @param {String} dataSource 日历模版
     * @returns Number
     */
    getTime(dataSource) {
        return dataSource ? this._stringToTime(dataSource.trim()) : this._getCurDate().getTime();
    }

    getFormatTime(time) {
        return Number.isNaN(Number(time)) ? this._warn(`请传入正确的时间戳格式!`) : FormatTime.getFormatTime(time);
    }

    extends(callBacks) {
        extendsFunc.call(this, callBacks)
    }
}

module.exports = new Calendar();