import { parseQuery, stringfyQuery } from "../../main";

it('getUrlParams', () => {
    let person = { name: 'lihai', age: '20' }
    let url = `https://appapi.w3cschool.cn/jest_cn/jest_timer.html?${stringfyQuery(person)}`;
    expect(parseQuery(url)).toEqual(person)
})

it('getConcatParams', () => {
    let person = { name: 'lihai', age: '20', sex: null };
    expect(stringfyQuery(person)).toBe('name=lihai&age=20')
})