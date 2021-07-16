const MathTool = require('../mathTool/MathTool');
class Calendar {
    getCurDate() {
        return new Date();
    }

    getMonth(date) {
        return date.getMonth() + 1;
    }

    _createArray(CurDate, arr) {
        const date = [
            CurDate.getFullYear(),
            this.getMonth(CurDate),
            CurDate.getDate(),
            CurDate.getHours(),
            CurDate.getMinutes(),
            CurDate.getSeconds()
        ]
        return arr.map((val, index) => {
            console.log(val);
            return { key: val, value: MathTool.getUseTwoNumberToString(date[index]) };
        })
    }

    /**
     * 
     * @param {*} dateTime 时间
     * @param {*} format 时间格式  默认时间格式YY.MM.DD hh:mm:ss
     * @returns String
     */
    getStringCalender(dateTime, format = 'YY.MM.DD hh:mm:ss') {
        const CurDate = dateTime ? new Date(dateTime) : this.getCurDate();
        return format.replace(/^(YY).(MM).(DD)\s(hh).(mm).(ss)$/g, (match, p1, p2, p3, p4, p5, p6) => {
            const strs = this._createArray(CurDate, [p1, p2, p3, p4, p5, p6]);
            return strs.map((str) => {
                const { key, value } = str;
                match = match.replace(key, value);
                return match;
            }).pop();
        })
    }
}
module.exports = new Calendar();