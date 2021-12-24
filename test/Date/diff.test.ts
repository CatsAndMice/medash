import { eq, getType } from "../../main";
import diff from "../../src/Date/diff";
const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000
it('Date diff', () => {
    let now = Date.now();
    expect(eq(getType(diff(new Date(), new Date('2020.10.10'))), 'string')).toBeTruthy
    expect(diff(now, now - second, { second: '秒' })).toBe('1秒');
    expect(diff(now, now - minute, { minute: '分钟' })).toBe('1分钟');
    expect(diff(now, now - hour, { hour: '小时' })).toBe('1小时');
    expect(diff(now, now - day, { day: '天' })).toBe('1天');
    expect(diff(now, now - day - hour - minute - second, { day: '天', hour: '小时', minute: '分钟', second: '秒' })).toBe('1天,1小时,1分钟,1秒')
    expect(diff(now, now - 2 * day - hour - minute - second, { day: '天', hour: '小时', minute: '分钟', second: '秒' })).toBe('2天,1小时,1分钟,1秒')
})

it('concat', () => {
    let now = Date.now();
    expect(diff(now, now - day - hour - minute - second, { day: '天', hour: '小时', minute: '分钟', second: '秒', concat: ':' })).toBe('1天:1小时:1分钟:1秒');
})