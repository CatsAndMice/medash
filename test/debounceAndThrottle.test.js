const DebounceAndThrottle = require('../src/debounceAndThrottle/DebounceAndThrottle');
jest.useFakeTimers();
it('防抖', () => {
    let fn = jest.fn(),
        debounce = DebounceAndThrottle.debounce(fn, 1000, true);
    debounce();
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(2);
    debounce();
    jest.advanceTimersByTime(500);
    expect(fn).toBeCalledTimes(2);
    jest.advanceTimersByTime(500);
    expect(fn).toBeCalledTimes(3);
})

it('取消防抖', () => {
    let fn = jest.fn(),
        debounce = DebounceAndThrottle.debounce(fn);
    debounce();
    DebounceAndThrottle.cancelDebounce();
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(0);
    debounce();
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
})

it('节流', () => {
    let fn = jest.fn(),
        throttle = DebounceAndThrottle.throttle(fn);
    //短时间内多次执行，只执行一次
    throttle();
    jest.advanceTimersByTime(100);
    throttle();
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
})

it('取消节流', () => {
    let fn = jest.fn(),
        throttle = DebounceAndThrottle.throttle(fn);
    throttle();
    jest.advanceTimersByTime(500);
    DebounceAndThrottle.cancelThrottle();
    expect(fn).toBeCalledTimes(0);
})