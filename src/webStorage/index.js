const SessionStorage = require('./SessionStorage')
const LocalStorage = require('./LocalStorage')
const LowDb = require('./lowdb')
module.exports = {
  SessionStorage,
  LocalStorage,
  LowDb,
  //缩写
  Sdb: SessionStorage,
  Ldb: LocalStorage
}
