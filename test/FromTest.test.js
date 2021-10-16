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
})