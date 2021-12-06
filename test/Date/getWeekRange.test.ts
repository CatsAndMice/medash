import { formatDate, getWeekRange } from "../../main";

describe("getWeekRange test", () => {
    it("getWeekRange", () => {
        const { start, end } = getWeekRange();
        expect(end).toBeGreaterThan(start);
        expect(formatDate(end - start)).toBe('7 days');
    })
})
