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
})
