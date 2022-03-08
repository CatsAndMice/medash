import { getThousandsChar } from "../../main";

describe("getThousandsChar test", () => {
    it("lt 1000", () => {
        expect(getThousandsChar(100)).toBe('100');

    })
    it('gtOreq 1000', () => {
        expect(getThousandsChar(1000)).toBe('1,000');
        expect(getThousandsChar(1001.4509)).toBe('1,001.4509')
        expect(getThousandsChar(10011010.4509)).toBe('10,011,010.4509')
    })
})
