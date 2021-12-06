import { formatDate, getMonthRange } from "../../main";
import resetDate from '../../src/Date/resetDate';

describe("getMonthRange test", () => {
    it("getMonthRange", () => {
        const { start, end } = getMonthRange();
        const today = resetDate();
        today.setMonth(today.getMonth() + 1);
        const data = new Date(today.getTime() - 1000);
        expect(end).toBeGreaterThan(start);
        expect(formatDate(end - start)).toBe(`${data.getDate()} days`);
    })
})
