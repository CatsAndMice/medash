```ts
medash.deepFreeze(obj: Set<any> | Map<any,any> | Object)
```
深度冻结`Object、Set、Map`实例对象,冻结的对象仅允许读取

**参数**  
1. `obj`(Set<any>| Map<any,any> | Object): `Object、Set、Map`对象
  
**返回**  
已冻结的`Object、Set、Map`对象        
  
**例子**  

<me-embed>const  { deepFreeze }  = require("medash")
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
</me-embed>