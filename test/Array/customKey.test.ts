import { customKey } from "../../main";
describe("customKey Object", () => {
    let origin = [{ name: "a", age: 1, params: { name: 'params1' } }]
    it('数组自定义字段', () => {
        expect(customKey(origin, { key: 'name', customKey: 'sex' })).toEqual([{ sex: 'a' }])
        expect(customKey(origin, { key: 'params', customKey: 'sex' })).toEqual([{ sex: { name: 'params1' } }])
    })

    it("数组自定义多字段", () => {
        expect(customKey(origin, [{ key: "name", customKey: "key" }, { key: "params", customKey: "value" }])).toEqual([{ key: "a", value: { name: 'params1' } }])
    })

    it("数组自定义字段跳过", () => {
        expect(customKey(origin, [{ key: "name", customKey: "key", skip: 'a' }, { key: "params", customKey: "value" }])).toEqual([{ value: { name: 'params1' } }])
        expect(customKey(origin, { key: 'name', customKey: 'sex', skip: 'a' })).toEqual([])
    })

    // it("跳过特定的值", () => {
    //     let target = [{ value: { name: 'params1' } }];
    //     expect(ExpandArray.format(origin, [{ attr: "name", formatName: "key", skipValue: "a" }, { attr: "params", formatName: "value" }])).toEqual(target)
    // })

    // it("getMax,getMin", () => {
    //     let nums = [1, 3, 2, 5, 2, -3, 4];
    //     expect(ExpandArray.getMax(nums)).toBe(5)
    //     expect(ExpandArray.getMix(nums)).toBe(-3)
    // })

    // it('unique', () => {
    //     let obj = { name: 1, age: 2 }
    //     let unique = [1, 2, 3, 2, 31, 1, obj, obj];
    //     expect(ExpandArray.unique(unique)).toEqual(Array.from(new Set(unique)))
    // })
})