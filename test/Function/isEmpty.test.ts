import { isEmpty } from "../../main";
it('isEmpty', () => {
    let und;
    let str = '';
    let num = 0;
    let n = null;
    let str1 = '1';
    expect(isEmpty(und)).toBeTruthy();
    expect(isEmpty(str)).toBeTruthy();
    expect(isEmpty(num)).toBeTruthy();
    expect(isEmpty(n)).toBeTruthy();
    expect(isEmpty(str1)).toBeFalsy();
    expect(isEmpty(NaN)).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty([])).toBeTruthy()
})