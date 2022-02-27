import { toArray } from "../../main";

describe("toArray test", () => {
    it("toArray", () => {
        expect(toArray({})).toEqual([]);
        expect(toArray(/ere/)).toEqual([]);
        expect(toArray(new Set([11]))).toEqual([11]);
        expect(toArray(new Map([[1, 2]]).values())).toEqual([2]);
    })
})
