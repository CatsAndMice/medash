const { FromTest } = require('../main')
describe('校验表单方法', () => {
    it('isBrowser', () => {
        expect(FromTest.isBrowser()).toBeFalsy()
    })

    it("isFunc",()=>{
        expect(FromTest.isFunc(()=>{})).toBeTruthy()
        expect(FromTest.isFunc()).toBeFalsy()
    })
})