const { LocalStorage, SessionStorage } = require('../src/webStorage');
test('浏览器webStorage封装', () => {
    let key = 'hai',
        value = 'value';
    expect(LocalStorage.setItem(key)).toBeUndefined();
    expect(SessionStorage.setItem('', value)).toBeUndefined();
    expect(SessionStorage.getItem()).toBeNull();
    expect(LocalStorage.getItem()).toBeNull();
    expect(SessionStorage.getItem(key)).toBeNull();
    expect(LocalStorage.getItem(key)).toBeNull();
    expect(LocalStorage.removeItem(key)).toBeNull();
    expect(SessionStorage.removeItem(key)).toBeNull();
    expect(LocalStorage.clear()).toBeNull();
    expect(SessionStorage.clear()).toBeNull();
})
