import { toNumber } from "../../main";

describe("toNumber test", () => {
    it("toNumber", () => {
        expect(toNumber({})).toBe(0)
        expect(toNumber('2')).toBe(2)
        expect(toNumber('200')).toBe(200)
        expect(toNumber('-200')).toBe(-200)
        expect(toNumber('-20s0')).toBe(-20)
        expect(toNumber([1])).toBe(1)
        expect(toNumber(['p'])).toBeNaN()
    })
})
