import { compose } from "../../main";

describe("compose test", () => {
    it("compose", () => {
        const f1 = (p) => {
            return p + 1;
        }
        const f2 = (p) => {
            return p ** 2;
        }


        expect(compose(f1, f2)(1)).toBe(4);
        expect(compose(f2, f1)(2)).toBe(5);
    })
})
