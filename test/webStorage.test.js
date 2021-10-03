const { Ldb, Sdb, LowDb } = require('../main')
const fs = require('fs')
const path = require('path')
const key = 'hai'
const value = 'value'

describe('存储', () => {
  it('LocalStorage', () => {
    expect(Ldb.setItem(key)).toBeUndefined()
    expect(Ldb.getItem()).toBeNull()
    expect(Ldb.getItem(key)).toBeNull()
    expect(Ldb.removeItem(key)).toBeNull()
    expect(Ldb.clear()).toBeNull()
  })

  it('SessionStorage', () => {
    expect(Sdb.setItem('', value)).toBeUndefined()
    expect(Sdb.getItem()).toBeNull()
    expect(Sdb.getItem(key)).toBeNull()
    expect(Sdb.removeItem(key)).toBeNull()
    expect(Sdb.clear()).toBeNull()
  })

  it('LowDb', () => {
    let values = { des: "测试一下" };
    LowDb.setItem('testLowDb', values)
    expect(LowDb.getItem('testLowDb')).toEqual(values)
    LowDb.removeItem('testLowDb')
    expect(LowDb.getItem('testLowDb')).toBeNull()
    expect(fs.existsSync(path.join(process.cwd(),'db'))).toBeTruthy()
    LowDb.clear();
    expect(fs.existsSync(path.join(process.cwd(),'db'))).toBeFalsy()
  })
})

