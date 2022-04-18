import { isNumber } from "../../main";

describe("isNumber test", () => {
    it("isNumber", () => {
        expect(isNumber(1)).toBeTruthy()
        expect(isNumber({})).toBeFalsy()
        expect(isNumber(undefined)).toBeFalsy()
        expect(isNumber(null)).toBeFalsy()
    })
})
