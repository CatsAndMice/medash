import { or } from "../../main";

describe("or test", () => {
    it("or", () => {
        expect(or(true, true)).toBeTruthy();
        expect(or(false, true)).toBeTruthy();
        expect(or(false, {})).toBeTruthy();
        expect(or(false, 0)).toBeFalsy();
    })
})
