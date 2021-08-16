const day = 1000 * 60 * 60 * 24,
    hour = 1000 * 60 * 60,
    minute = 1000 * 60,
    second = 1000;
class FormatTime {
    /**
     * 格式化时间戳，返回 *day *hour *minute *second
     * @param {Number} ms 时间戳 
     * @returns 
     */
    getFormatTime(ms) {
        ms = Math.abs(ms);
        const params = {
            day: Math.floor(ms / day),
            hour: Math.floor(ms / hour) % 24,
            minute: Math.floor(ms / minute) % 60,
            second: Math.floor(ms / second) % 1000,
            millisecond: Math.floor(ms) % 1000
        }
        return Object.entries(params).filter(val => val[1] !== 0).map(([key, val]) => `${val} ${key}${val === 1 ? '' : 's'}`).join(',');
    }
}
module.exports = new FormatTime();