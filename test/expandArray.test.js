const { ExpandArray } = require('../main')
describe("测试数组扩展模块", () => {
    let origin = [{ name: "a", age: 1, params: { name: 'params1' } }]
    it('格式化数组成自定形式', () => {
        expect(ExpandArray.format(origin, { attr: "name", formatName: "key" })).toEqual([{ key: "a" }])
    })

    it("格式以数组形式传参", () => {
        let target = [{ key: "a", value: { name: 'params1' } }];
        expect(ExpandArray.format(origin, [{ attr: "name", formatName: "key" }, { attr: "params", formatName: "value" }])).toEqual(target)
    })

    it("跳过特定的值", () => {
        let target = [{ value: { name: 'params1' } }];
        expect(ExpandArray.format(origin, [{ attr: "name", formatName: "key", skipValue: "a" }, { attr: "params", formatName: "value" }])).toEqual(target)
    })

    it("getMax,getMin", () => {
        let nums = [1, 3, 2, 5, 2, -3, 4];
        expect(ExpandArray.getMax(nums)).toBe(5)
        expect(ExpandArray.getMix(nums)).toBe(-3)
    })

    it('unique', () => {
        let obj = { name: 1, age: 2 }
        let unique = [1, 2, 3, 2, 31, 1, obj, obj];
        expect(ExpandArray.unique(unique)).toEqual(Array.from(new Set(unique)))
    })
})