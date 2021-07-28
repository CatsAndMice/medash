const { LocalStorage, SessionStorage } = require('../src/webStorage');
let key = 'hai',
    value = 'value';
it('LocalStorage测试', () => {
    expect(LocalStorage.setItem(key)).toBeUndefined();
    expect(LocalStorage.getItem()).toBeNull();
    expect(LocalStorage.getItem(key)).toBeNull();
    expect(LocalStorage.removeItem(key)).toBeNull();
    expect(LocalStorage.clear()).toBeNull();
})
it('SessionStorage测试', () => {
    expect(SessionStorage.setItem('', value)).toBeUndefined();
    expect(SessionStorage.getItem()).toBeNull();
    expect(SessionStorage.getItem(key)).toBeNull();
    expect(SessionStorage.removeItem(key)).toBeNull();
    expect(SessionStorage.clear()).toBeNull();
})