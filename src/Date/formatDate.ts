const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000
export const option = {
    day: '天',
    hour: '小时',
    minute: '分钟',
    second: '秒',
    millisecond: '毫秒',
    concat: ','
}

export type Format = {
    day?: string,
    hour?: string,
    minute?: string,
    second?: string,
    millisecond?: string
    concat?: string
}

/**
* 格式化时间戳，返回 *day *hour *minute *second
* @param {Number} ms 时间戳
* @returns
*/
export default (ms: Date | number, format: Format = option) => {
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
    return Object.entries(params).map(([key, val]) => {
        const isHasKey = key in format;
        return isHasKey ? `${val}${format[key]}` : null;
    }).filter(val => val).join(format.concat)
}