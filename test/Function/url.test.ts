import { getUrlParams, getConcatParams } from "../../main";

it('getUrlParams', () => {
    let person = { name: 'lihai', age: '20' }
    let url = `https://appapi.w3cschool.cn/jest_cn/jest_timer.html${getConcatParams(person)}`;
    expect(getUrlParams(url)).toEqual(person)
})

it('getConcatParams', () => {
    let person = { name: 'lihai', age: '20', sex: null };
    expect(getConcatParams(person)).toBe('?name=lihai&age=20')
})