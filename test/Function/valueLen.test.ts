import { valueLen } from "../../main";

describe("valueLen test", () => {
    it("valueLen emoji", () => {
        expect(valueLen('😃我12')).toBe(4);
        expect(valueLen('我爱javaScipt')).toBe(11);
        expect(valueLen('@4😅5$%😇')).toBe(7);
        expect(valueLen(',.)😅5$  %😇([]')).toBe(13)
    })
})
