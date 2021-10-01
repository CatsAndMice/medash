const { LowDb } = require('../../main')
LowDb.setItem('key', [{ a: 1, b: undefined, c: null, d: function () { } }, { name: 'db', age: 20 }]);
console.log(LowDb.getItem('key'));
// console.log(LowDb.removeItem('key'),11);
// console.log(LowDb.clear());