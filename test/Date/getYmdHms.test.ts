import getYmdHms from "../../src/Date/getYmdHms";

describe('获取年月日时分秒', () => {
    it('getYmdHms now', () => {
        expect(getYmdHms()).toBeTruthy()
    })

    it('getYmdHms Date', () => {
        let date = new Date();
        let YmdHms = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            day: date.getDay()
        }
        expect(getYmdHms(date)).toEqual(YmdHms);
    })

    it('getYmdHms number', () => {
        let date = new Date(2012);
        let YmdHms = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            day: date.getDay()
        }
        expect(getYmdHms(date)).toEqual(YmdHms);
    })

    it('getYmdHms now-data', () => {
        let data = new Date()
        let YmdHms = getYmdHms(data)
        let { year, month, date, hours, minutes, seconds, day } = YmdHms;
        expect(year).toBe(data.getFullYear())
        expect(month).toBe(data.getMonth())
        expect(date).toBe(data.getDate())
        expect(hours).toBe(data.getHours())
        expect(minutes).toBe(data.getMinutes())
        expect(seconds).toBe(data.getSeconds())
        expect(day).toBe(data.getDay())
    })
})
