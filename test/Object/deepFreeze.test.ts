import { deepFreeze } from "../../main";

describe("deepFreeze test", () => {
    it("deepFreeze", () => {
        const array = deepFreeze([1, [2]])
        const obj = deepFreeze({ name: 'medash', age: 1 })
        const set = deepFreeze(new Set([1, 2, [2]]))
        const map = deepFreeze(new Map([[1, { a: 1 }]]))
        expect(array[0]).toBe(1)
        expect(obj.name).toBe('medash')
        expect(set.has(1)).toBeTruthy()
        expect(map.get(1)).toEqual({ a: 1 })
        try {
            set.add(0)
        } catch (error) {
            expect(error).not.toBeUndefined()
        }

        try {
            array.push(0)
        } catch (error) {
            expect(error).not.toBeUndefined()
        }

        try {
            obj.name = "修改"
        } catch (error) {
            expect(error).not.toBeUndefined()
        }

        try {
            map.delete(1)
        } catch (error) {
            expect(error).not.toBeUndefined()
        }

    })
})
