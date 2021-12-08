const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000
enum chinese {
    day = "天",
    hour = "小时",
    minute = "分钟",
    second = "秒",
    millisecond = "毫秒"
}
type langs = 'ch' | 'us'
/**
* 格式化时间戳，返回 *day *hour *minute *second
* @param {Number} ms 时间戳
* @returns
*/
export default (ms: Date | number, lang: langs = 'ch') => {
    if (ms instanceof Date) {
        ms = ms.getTime();
    }
    ms = Math.abs(ms)
    const params = {
        day: Math.floor(ms / day),
        hour: Math.floor(ms / hour) % 24,
        minute: Math.floor(ms / minute) % 60,
        second: Math.floor(ms / second) % 60,
        millisecond: Math.floor(ms) % 1000
    }
    return Object.entries(params).filter(val => val[1] !== 0).map(([key, val]) => {
        return lang === 'us' ? `${val} ${key}${val === 1 ? '' : 's'}` : `${val}${chinese[key]}`;
    }).join(', ')
}