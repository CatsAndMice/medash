import { formatDate, getType,eq } from "../../main";

const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000

describe('format', () => {
    it('date', () => {
        expect(eq(getType(formatDate(new Date())),'string')).toBeTruthy()
    })

    it('format', () => {
        expect(formatDate(second)).toBe('1 second');
        expect(formatDate(minute)).toBe('1 minute');
        expect(formatDate(hour)).toBe('1 hour');
        expect(formatDate(day)).toBe('1 day');
        expect(formatDate(day + hour + minute + second)).toBe('1 day, 1 hour, 1 minute, 1 second')
        expect(formatDate(2 * day + hour + minute + second)).toBe('2 days, 1 hour, 1 minute, 1 second')
    })
})
