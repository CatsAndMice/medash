import { randomNum } from "../../main"
it('randomNum', () => {
    expect(randomNum(1, 3)).toBeGreaterThanOrEqual(0)
    expect(randomNum(1, 3)).toBeLessThanOrEqual(4)
    expect(randomNum(2,9)).toBeGreaterThanOrEqual(2)
})