import { gt } from "../../main";
import stringToDate from "../../src/Date/stringToDate";

it('stringToDate', () => {
    expect(typeof stringToDate('2012,12,34')).toBe('number')
    expect(gt(Date.now(), (stringToDate('2012,12,34')) as number)).toBeTruthy();
})