import diff from "../../src/Date/diff";

const day = 1000 * 60 * 60 * 24
const hour = 1000 * 60 * 60
const minute = 1000 * 60
const second = 1000
it('Date diff', () => {
    let now = Date.now();
    expect(diff(now, now - second)).toBe('1 second');
    expect(diff(now, now - minute)).toBe('1 minute');
    expect(diff(now, now - hour)).toBe('1 hour');
    expect(diff(now, now - day)).toBe('1 day');
    expect(diff(now, now - day - hour - minute - second)).toBe('1 day, 1 hour, 1 minute, 1 second')
    expect(diff(now, now - 2 * day - hour - minute - second)).toBe('2 days, 1 hour, 1 minute, 1 second')
})