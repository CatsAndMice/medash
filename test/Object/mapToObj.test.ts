import { mapToObj } from "../../main";

describe("mapToObj test", () => {
    it("mapToObj", () => {
        const num: unknown = 1
        expect(mapToObj(new Map([[1, 2]]))).toEqual({ 1: 2 })
        expect(mapToObj(num as Map<any, any>)).toBeUndefined()
        expect(mapToObj(new Map([[[1], [1]], [[], []]]))).toEqual({ '1': [1], '': [] })
        expect(mapToObj(new Map([[{ name: 1 }, 'obj'], [{ age: 2 }, 'obj']]))).toEqual({ '[object Object]': 'obj' })
    })
})
