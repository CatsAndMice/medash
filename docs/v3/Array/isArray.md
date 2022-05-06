```ts
medash.isArray(value:any):boolean
```
判断是否为`Array`类型

**参数**  
1. `value`(any): 任意类型值
  
**返回**  
`boolean`:如果参数为`Array`类型，返回`true`;否则返回`false`。       
  
**例子**  

<me-embed>const {isArray} = require("medash");
console.log(isArray([]))//true
console.log(isArray({}))//false
console.log(isArray(''))//false</me-embed>