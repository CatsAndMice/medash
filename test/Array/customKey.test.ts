import { customKey, eq } from "../../main";
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

    it("clone", () => {
        let clone = customKey(origin, { key: 'params', customKey: 'params' }, true)
        let clones = customKey(origin, [{ key: 'params', customKey: 'params' }], true)
        expect(clone[0].params === origin[0].params).toBeFalsy()
        expect(clones[0].params === origin[0].params).toBeFalsy()
    })

})