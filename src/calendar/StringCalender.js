const { _warn } = require('../tool/index'),
    MathTool = require('../mathTool/MathTool'),
    DateTime = require('./DateTime'),
    ymdReg = /^(YY).(MM).(DD).?$/,
    hmsReg = /^(hh).(mm).(ss).?$/,
    dateReg = /^(YY).(MM).(DD).?\s(hh).(mm).?(ss)?.?$/;
class StringCalender {
    _createHMSArray() {
        return [this.CurDate.getHours(), this.CurDate.getMinutes(), this.CurDate.getSeconds()];
    }


    _createYMDArray() {
        return [this.CurDate.getFullYear(), DateTime.getCurDateMonth(), this.CurDate.getDate()];
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


    /**
    * 获取返回时间格式对应的时间字符串
    * @param {*} format 时间格式
    * @param {*} reg 正则
    * @returns String
    */
    _getReplaceFormat(format, reg) {
        if (!reg) {
            _warn(`${format}格式不正确`);
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

    _stringToTime(dataSource) {
        return formatTimeReg.test(dataSource) ? Number(this._replace(dataSource)) : this._warn('时间格式错误!');
    }

    getStringCalender(dateTime, format = 'YY.MM.DD hh:mm:ss') {
        this.CurDate = dateTime ? DateTime.setAndReturnDateTime(dateTime) : DateTime.getCurDateTime();
        const regs = [ymdReg, hmsReg, dateReg];
        return this._getReplaceFormat(format, regs.find(reg => reg.test(format)));
    }
}

module.exports = new StringCalender();