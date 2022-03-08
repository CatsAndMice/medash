import { isEmail } from "../../main";
it('isEmail', () => {
    let email1 = '2322887';
    let email2 = '2322873900@qq.com';
    let email3 = 'lihai@163.com';
    expect(isEmail(email1)).toBeFalsy();
    expect(isEmail(email2)).toBeTruthy();
    expect(isEmail(email3)).toBeTruthy();
})