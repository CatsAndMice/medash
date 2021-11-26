import { isEmptyObj } from "../../main";

describe("isEmptyObj test", () => {
    it("isEmptyObj", () => {
        expect(isEmptyObj({})).toBeTruthy();
        expect(isEmptyObj({ name: 'name' })).toBeFalsy();
        expect(isEmptyObj(1 as Object)).toBeFalsy();
    })
})
