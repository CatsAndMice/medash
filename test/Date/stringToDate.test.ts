import { getYmdHms, gt } from "../../main";
import stringToDate from "../../src/Date/stringToDate";

it('stringToDate', () => {
    let { year, month, date, hours, minutes } = getYmdHms(stringToDate('2021-11-12 9:12') as number);
    expect(typeof stringToDate('2012,12,34')).toBe('number')
    expect(gt(Date.now(), (stringToDate('2012,12,34')) as number)).toBeTruthy();
    expect(year).toBe(2021);
    //实际月份要比Date大1
    expect(month).toBe(11);
    expect(date).toBe(12);
    expect(hours).toBe(9);
    expect(minutes).toBe(12)
    expect(stringToDate('')).toBeNaN()
})