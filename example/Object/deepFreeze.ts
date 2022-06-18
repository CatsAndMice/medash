import { deepFreeze } from "../../main";
const array = deepFreeze([1, [2]])
const obj = deepFreeze({name:'medash',age:1})
const set = deepFreeze(new Set([1, 2, [2]]))
const map = deepFreeze(new Map([[1, { a: 1 }]]))
console.log(array[1]);//[2]
console.log(obj.name);//'medash'
console.log(set.has(1));//true
console.log(map.get(1));//{ a: 1 }
array[0] = 1//报错
obj.name = 'deepFreeze'//报错
set.add(9)//报错：只读，不允许修改!
map.set('map',1)//报错：只读，不允许修改!
