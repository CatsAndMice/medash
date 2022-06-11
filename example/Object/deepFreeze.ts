import { deepFreeze } from "../../main";
const arr = deepFreeze([1, [2]])
const s = deepFreeze(new Set([1, 2, [2]]))
const m = deepFreeze(new Map([[1, { a: 1 }], [2, s],[3,arr]]))
console.log(m);

// m.get(2).add(2)
console.log(m.get(2).name = 20);

// console.log(arr);

// console.log(arr[0]);
// arr[1][1] = 2
// console.log(arr[0]);
