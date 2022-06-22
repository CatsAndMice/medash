import { isPromise } from "../../main";

describe("isPromise test", () => {
    it("empty", () => {
        expect(isPromise(undefined)).toBeFalsy()
        expect(isPromise(null)).toBeFalsy()
        expect(isPromise(0)).toBeFalsy()
        expect(isPromise('')).toBeFalsy()
        expect(isPromise('isPromise')).toBeFalsy()
        expect(isPromise([])).toBeFalsy()
        expect(isPromise({})).toBeFalsy()
        expect(isPromise(new Map())).toBeFalsy()
        expect(isPromise(new Set())).toBeFalsy()
        expect(isPromise(new Date())).toBeFalsy()
    })

    it("isPromise", () => {
        expect(isPromise(Promise)).toBeFalsy()
        expect(isPromise(Promise.resolve)).toBeFalsy()
        expect(isPromise(Promise.reject())).toBeTruthy()
    })

    it("async function", () => {
        const fn = async function () { }
        expect(isPromise(fn)).toBeFalsy()
        expect(isPromise(fn())).toBeTruthy()
    })
})
