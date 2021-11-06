import { debounce } from "../../main";
it('debounce immediate', () => {
    const fn = jest.fn()
    const callBack = debounce(fn, 1500, true)
    expect(fn).toBeCalledTimes(1)
    callBack();
    callBack();
    setTimeout(() => {
        expect(fn).toBeCalledTimes(2)
    }, 4000)

})

it('debounce', () => {
    const fn = jest.fn();
    const callBack = debounce(fn, { immediate: false, wait: 100 })
    expect(fn).not.toBeCalled()
    callBack();
    callBack();
    setTimeout(() => {
        expect(fn).toBeCalledTimes(1)
    }, 1000)
})