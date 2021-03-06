import { valueLen } from "../../main";

describe("valueLen test", () => {
    it("valueLen emoji", () => {
        expect(valueLen('ðæ12')).toBe(4);
        expect(valueLen('æç±javaScipt')).toBe(11);
        expect(valueLen('@4ð5$%ð')).toBe(7);
        expect(valueLen(',.)ð5$  %ð([]')).toBe(13)
    })
})
