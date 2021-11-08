import medash from "../../main"

describe('event', () => {
    it('once', () => {
        let fn = function () { }
        medash.once('one', function () {
            console.log(1)
        })
        expect(medash.watchCache().has('one')).toBeTruthy();
        medash.once('one', fn)
        medash.once('one', fn)
        expect(Object.keys(medash.watchCache().get('one')).length).toBe(2)
        medash.trigger('one')
        expect(medash.watchCache().has('one')).toBeFalsy()
        console.log(medash.watchCache().get('one'));
    })

    // it('on', () => {
    //     let mockFn = jest.fn(() => { })
    //     MyEvent.on('on', mockFn)
    //     MyEvent.on('on', mockFn)
    //     expect(MyEvent.event['on'].length).toBe(1)
    //     MyEvent.trigger('on')
    //     expect(MyEvent.event['on'].length).toBe(1)
    //     expect(mockFn.mock.calls.length).toBe(1)
    //     expect(mockFn.mock.calls[0][0]).toBeUndefined()
    // })

    // it('remove', () => {
    //     MyEvent.on('remove', () => { })
    //     expect(MyEvent.event['remove'].length).toBe(1)
    //     MyEvent.remove('remove')
    //     expect(MyEvent.event['remove']).toBeUndefined()
    // })

    // it('maxCacheNum', () => {
    //     MyEvent.setMaxCacheNum(3)
    //     expect(MyEvent.maxCacheNum).toBe(3)
    // })
})