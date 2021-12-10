import { formatDate, getTodayRange } from "../../main";

describe("getTodayRange test", () => {
    it("getTodayRange", () => {
        const { start, end } = getTodayRange();
        expect(end).toBeGreaterThan(start)
        expect(formatDate(end - start,{day:'天'})).toBe('1天')
    })
})
