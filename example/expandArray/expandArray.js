const { ExpandArray } = require('../../main')
let origin = [{ name: "a", age: 1, params: { name: 'params1' } }, { name: "b", age: 2, params: { name: 'params2' } }, { name: "c", age: 3, params: { name: 'params2' } }]

//㳀克隆 格式化
let target1 = ExpandArray.format(origin, { attr: 'params', formatName: "keys" })
console.log(target1);
console.log(origin[0].params === target1[0].keys);

//深克隆 格式化
let target2 = ExpandArray.format(origin, [{ attr: 'params', formatName: "keys" }, { attr: "name", formatName: "name", skipValue: 'a' }], true)
console.log(target2);
console.log(origin[0].params === target2[0].keys);

let arr = [1, 3, 5, 4, 6, 2]
console.log(ExpandArray.getMax(arr));
console.log(ExpandArray.getMix(arr));
console.log(arr);

