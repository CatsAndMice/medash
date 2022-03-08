import { when } from "../../main";
import { gt } from "../../main";

describe("when test", () => {
    it("when", () => {
        const isGtFive = when((x) => gt(x, 5), (x) => {
            return gt(x, 0);
        })

        expect(isGtFive(6)).toBeTruthy();
        expect(isGtFive(-1)).toBe(-1)
    })

    it('when math', () => {
        const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
        expect(doubleEvenNumbers(2)).toBe(4);
        expect(doubleEvenNumbers(1)).toBe(1);
    })
})
