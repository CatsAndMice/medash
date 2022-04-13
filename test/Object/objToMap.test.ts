import { each, isFunc, objToMap } from "../../main";

describe("objToMap test", () => {
    it("objToMap", () => {
        const obj = { 1: 1, 2: 2, one: 1 };
        const map = objToMap(obj) as Map<string, unknown>;
        expect(isFunc(map.get)).toBeTruthy();
        each(obj, (key, value) => {
            expect(map.get(key)).toBe(value);
        })
    })
})
