import { parseQuery, stringfyQuery } from "../../main";

it('parseQuery', () => {
    let person = { name: 'lihai', age: '20' }
    let url = `https://appapi.w3cschool.cn/jest_cn/jest_timer.html?${stringfyQuery(person)}`;
    expect(parseQuery(url)).toEqual(person)
})

it('stringfyQuery', () => {
    let person = { name: 'lihai', age: '20', sex: null };
    expect(stringfyQuery()).toBe('')
    expect(stringfyQuery(person)).toBe('name=lihai&age=20')
})