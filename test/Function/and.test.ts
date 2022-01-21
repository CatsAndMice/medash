import { and } from "../../main";

describe("and test", () => {
    it("and", () => {
        expect(and(true, true)).toBeTruthy();
        expect(and(false, true)).toBeFalsy();
        expect(and({}, {})).toBeTruthy();
    })
})
