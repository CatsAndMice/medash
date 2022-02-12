import medash, { isEmptyObj } from "../../main"

describe('event', () => {
    it('event', () => {
        expect(isEmptyObj(medash.event)).toBeFalsy();
    })

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

    it('on', () => {
        let num = 0;
        let mockFn = jest.fn(() => { })
        const add = () => {
            num++;
        }
        medash.on('on', mockFn)
        medash.on('on', mockFn)
        medash.on('add', add);
        expect(medash.watchCache().get('on').length).toBe(1)
        medash.trigger('on')
        expect(medash.watchCache().get('on').length).toBe(1)
        expect(mockFn.mock.calls.length).toBe(1)
        medash.trigger('add')
        expect(num).toBe(1);
    })

    it('remove', () => {
        medash.on('remove', () => { })
        expect(medash.watchCache().get('remove').length).toBe(1)
        medash.remove('remove')
        expect(medash.watchCache().has('remove')).toBeFalsy()
    })

    it('setMaxCache', () => {
        medash.setMaxCache(3)
        expect(medash.getMaxCache()).toBe(3)
    })

    it('function some', () => {
        let fn1 = () => { };
        let fn2 = () => { };
        let fn3 = () => console.log(11);
        let fn4 = () => false;
        medash.on('someFunc', fn1);
        medash.once('someFunc', fn2);
        expect(medash.watchCache().get('someFunc').length).toBe(1)
        medash.on('someFunc', fn3)
        medash.once('someFunc', fn4)
        expect(medash.watchCache().get('someFunc').length).toBe(3);
        medash.trigger('someFunc');
        expect(medash.watchCache().get('someFunc').length).toBe(2);
    })

    it('rest', () => {
        let rest = '';
        medash.on('rest', (param) => {
            rest = param;
        });
        medash.trigger('rest', 'rest');
        expect(rest).toBe('rest');
    })
})