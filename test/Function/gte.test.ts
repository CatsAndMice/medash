import { gte } from "../../main";

describe("gte test", () => {
    it("gte", () => {
        expect(gte(1, 1)).toBeTruthy();
        expect(gte(2, 1)).toBeTruthy();
        expect(gte(0, 1)).toBeFalsy();
        expect(gte(-1,0)).toBeFalsy();
    })
})
