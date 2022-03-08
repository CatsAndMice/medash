import { parseQuery, stringfyQuery } from "../../main";

it('parseQuery', () => {
    let person = { name: 'lihai', age: '20', other: [1, 2, '', { name: 'lihai' }, [1]] }
    let url = `https://appapi.w3cschool.cn/jest_cn/jest_timer.html?${stringfyQuery(person)}`;
    console.log(parseQuery(url));
    expect(parseQuery(url)).toEqual({ name: 'lihai', age: '20', other: ['1', '2'] })
})

it('stringfyQuery', () => {
    let person = { name: 'lihai', age: '20', sex: [0, '', 1, 2], callBack: () => { } };
    expect(stringfyQuery()).toBe('')
    expect(stringfyQuery(person)).toBe('name=lihai&age=20&sex=1&sex=2')
})