import { getType } from "../../main";
import { eq } from '../../main'

describe("getType test", () => {
    it("undefined", () => {
        expect(eq(getType(undefined), 'undefined')).toBeTruthy()
    })

    it('null', () => {
        expect(eq(getType(null), 'null')).toBeTruthy()
    })

    it('symbol', () => {
        expect(eq(getType(Symbol('测试symbol类型')), 'symbol')).toBeTruthy()
    })

    it('string', () => {
        expect(eq(getType(''), 'string')).toBeTruthy()
    })

    it('number', () => {
        expect(eq(getType(0), 'number')).toBeTruthy()
    })

    it('function', () => {
        expect(eq(getType(() => { }), 'function')).toBeTruthy()
    })

    it('String', () => {
        expect(eq(getType(new String('')), 'String')).toBeTruthy()
    })

    it('Number', () => {
        expect(eq(getType(new Number(0)), 'Number')).toBeTruthy()
    })

    it('Array', () => {
        expect(eq(getType([]), 'Array')).toBeTruthy()
    })

    it('Object', () => {
        expect(eq(getType({}), 'Object')).toBeTruthy()
    })

    it('Date', () => {
        expect(eq(getType(new Date()), 'Date')).toBeTruthy()
    })

    it('RegExp', () => {
        expect(eq(getType(/q/), 'RegExp')).toBeTruthy()
    })
})
