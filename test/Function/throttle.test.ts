import { throttle } from "../../main";
it('throttle', () => {
    const fn = jest.fn()
    const callBack = throttle(fn, 100)
    callBack();
    setTimeout(() => {
        expect(fn).toBeCalledTimes(1)
    }, 1000)
})