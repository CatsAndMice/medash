import { getLocalDb, getSionDb, setLocalDb, setSionDb, removeSionDb, removeLocalDb, clearLocalDb, clearSionDb } from "../../main";

describe("db test", () => {
    it("db get", () => {
        expect(getLocalDb('')).toBeUndefined()
        expect(getSionDb('key')).toBeNull()
        expect(getLocalDb('key')).toBeNull()
    })

    it("db set", () => {
        expect(setLocalDb('', '')).toBeUndefined()
        expect(setLocalDb('', 23)).toBeUndefined()
        expect(setSionDb('key', null)).toBeUndefined()
    })

    it('db remove', () => {
        expect(removeLocalDb('')).toBeUndefined()
        expect(removeSionDb('key')).toBeUndefined()
        expect(removeLocalDb('key')).toBeUndefined()
    })

    it('db clear', () => {
        expect(clearLocalDb()).toBeUndefined()
        expect(clearSionDb()).toBeUndefined()
    })
})
