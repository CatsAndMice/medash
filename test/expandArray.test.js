const { ExpandArray } = require('../main')
describe("测试数组扩展模块", () => {
    let origin = [{ name: "a", age: 1, params: { name: 'params1' } }]
    it('格式化数组成自定形式', () => {
        expect(ExpandArray.format(origin, { attr: "name", formatName: "key" })).toEqual([{ key: "a" }])
    })

    it("格式以数组形式传参", () => {
        let target =  [{ key: "a",  value: { name: 'params1' } }];
        expect(ExpandArray.format(origin, [{ attr: "name", formatName: "key" }, { attr: "params", formatName: "value" }])).toEqual(target)
    })

    it("跳过特定的值",()=>{
        let target =  [{value: { name: 'params1' } }];
        expect(ExpandArray.format(origin, [{ attr: "name", formatName: "key",skipValue:"a" }, { attr: "params", formatName: "value" }])).toEqual(target)
    })

    it("",()=>{

    })


})