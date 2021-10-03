const { FromTest } = require('../main')
describe('校验表单方法', () => {
    it('isBrowser', () => {
        expect(FromTest.isBrowser()).toBeFalsy()
    })
})