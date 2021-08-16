class StringCalender {
    getStringCalender(dateTime, format = 'YY.MM.DD hh:mm:ss') {
        this.CurDate = dateTime ? new Date(dateTime) : this._getCurDate();
        const regs = [ymdReg, hmsReg, dateReg];
        return this._getReplaceFormat(format, regs.find(reg => reg.test(format)));
    }
}

module.exports = new StringCalender();