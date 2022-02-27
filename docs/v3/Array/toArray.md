```ts
medash.toArray(value)
```
将参数值转化成数组。
参数值存在`Symbol.iterator`,则进行`Array.from(value)`转化;否则返回空数组`[]`


**参数**  
1. `value`(any): 任意值
  
**返回**  
数组       
  
**例子**  

<me-embed>const {toArray} = require("medash");
console.log(toArray({}));//[]
console.log(toArray(/ere/));//[]
console.log(toArray(new Set([11])));//[11]
console.log(toArray(new Map([[1, 2]]).values()))//[2]</me-embed>