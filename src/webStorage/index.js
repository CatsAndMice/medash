const SessionStorage = require('./SessionStorage')
const LocalStorage = require('./LocalStorage')
const LowDb = require('./lowdb')
module.exports = {
  SessionStorage,
  LocalStorage,
  LowDb,
  Sdb: SessionStorage,
  Ldb: LocalStorage
}
