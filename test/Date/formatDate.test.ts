import { formatDate, getType, eq } from "../../main";

const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000

describe('format', () => {
    it('date', () => {
        expect(eq(getType(formatDate(new Date())), 'string')).toBeTruthy()
    })

    it('format', () => {
        expect(formatDate(second, { second: 'second' })).toBe('1second');
        expect(formatDate(minute, { minute: '分钟' })).toBe('1分钟');
        expect(formatDate(hour, { hour: "时" })).toBe('1时');
        expect(formatDate(day, { day: '天' })).toBe('1天');
        expect(formatDate(day + hour + minute + second, { day: '天', hour: '小时', minute: '分钟', second: '秒' })).toBe('1天,1小时,1分钟,1秒')
        expect(formatDate(2 * day + hour + minute + second, { day: '天', hour: '小时', minute: '分钟', second: '秒' })).toBe('2天,1小时,1分钟,1秒')
    })

    it('cancat',()=>{
        expect(formatDate(day + hour + minute + second, {  hour: 'h', minute: 'm', second: 's',concat:':' })).toBe('1h:1m:1s')
    })
})
