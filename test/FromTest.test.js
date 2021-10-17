const { FromTest } = require('../main')
describe('校验表单方法', () => {
    it('isBrowser', () => {
        expect(FromTest.isBrowser()).toBeFalsy()
    })

    it("isFunc", () => {
        expect(FromTest.isFunc(() => { })).toBeTruthy()
        expect(FromTest.isFunc()).toBeFalsy()
    })

    it('isValueNoEmpty', () => {
        expect(FromTest.isValueNoEmpty('')).toBeFalsy();
        expect(FromTest.isValueNoEmpty(undefined)).toBeFalsy();
        expect(FromTest.isValueNoEmpty(null)).toBeFalsy()
        expect(FromTest.isValueNoEmpty(0)).toBeFalsy()
        expect(FromTest.isValueNoEmpty('0')).toBeTruthy()
    })

    it('isSafePaddWord', () => {
        expect(FromTest.isSafePaddWord('123AbA*a')).toBeTruthy()
        expect(FromTest.isSafePaddWord('12ABabc')).toBeFalsy()
        expect(FromTest.isSafePaddWord('12Aab*c')).toBeFalsy()
        expect(FromTest.isSafePaddWord('aAB**12')).toBeFalsy()
        expect(FromTest.isSafePaddWord('12AabB##')).toBeTruthy()
        expect(FromTest.isSafePaddWord('aAB@!aa11?')).toBeTruthy()
    })
})