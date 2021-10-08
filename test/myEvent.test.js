const { MyEvent } = require('../main');
const FromTest = require('../src/fromTest/FromTest');
describe('MyEvent', () => {
    it('once', () => {
        let fn = function () { }
        MyEvent.once('one', function () {
            console.log(1)
        })
        expect(Object.keys(MyEvent.event['one']).length).toBe(1)
        MyEvent.once('one', fn)
        MyEvent.once('one', fn)
        expect(Object.keys(MyEvent.event['one']).length).toBe(2)
        MyEvent.trigger('one')
        expect(FromTest.islengthNoZero(Object.keys(MyEvent.event))).toBeFalsy()
    })

    it('on', () => {
        let mockFn = jest.fn(() => { })
        MyEvent.on('on', mockFn)
        MyEvent.on('on', mockFn)
        expect(MyEvent.event['on'].length).toBe(1)
        MyEvent.trigger('on')
        expect(MyEvent.event['on'].length).toBe(1)
        expect(mockFn.mock.calls.length).toBe(1)
        expect(mockFn.mock.calls[0][0]).toBeUndefined()
    })

    it('remove', () => {
        MyEvent.on('remove', () => { })
        expect(MyEvent.event['remove'].length).toBe(1)
        MyEvent.remove('remove')
        expect(MyEvent.event['remove']).toBeUndefined()
    })

    it('maxCacheNum', () => {
        MyEvent.setMaxCacheNum(3)
        expect(MyEvent.maxCacheNum).toBe(3)
    })
})