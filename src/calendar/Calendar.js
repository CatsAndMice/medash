const MathTool = require('../mathTool/MathTool'),
    ymdReg = /^(YY).(MM).(DD).?$/,
    hmsReg = /^(hh).(mm).(ss).?$/,
    dateReg = /^(YY).(MM).(DD).?\s(hh).(mm).?(ss)?.?$/,
    formatTimeReg = /^(\d{4})(?:\D(\d{1,2}))?(?:\D(\d{1,2}))?(?:\s+(\d{1,2})(?:\D(\d{1,2}))?(?:\D(\d{1,2}))?\D?)?$/;
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

    _dealWith([year, months = 1, days = 1, hours = 0, minutes = 0, seconds = 0]) {
        const curDate = this._getCurDate();
        curDate.setFullYear(year);
        curDate.setMonth(Number(months - 1));
        curDate.setDate(days);
        curDate.setHours(hours);
        curDate.setMinutes(minutes);
        curDate.setSeconds(seconds);
        return curDate.getTime();
    }

    _replace(dataSource) {
        dataSource.replace(formatTimeReg, (match, ...arg) => {
            arg.splice(-2);
            return this._dealWith(arg);
        })
    }
    
    _stringToTime(dataSource) {
        return formatTimeReg.test(dataSource) ? Number(this._replace(dataSource)) : this._warn('时间格式错误!');
    }

    getTime(dataSource) {
        return dataSource ? this._stringToTime(dataSource.trim()) : this._getCurDate().getTime();
    }
}

module.exports = new Calendar();