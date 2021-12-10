import { formatDate, getWeekRange } from "../../main";

describe("getWeekRange test", () => {
    it("getWeekRange", () => {
        const { start, end } = getWeekRange();
        expect(end).toBeGreaterThan(start);
        expect(formatDate(end - start,{day:'天'})).toBe('7天');
    })
})
