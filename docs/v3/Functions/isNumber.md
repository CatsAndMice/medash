```ts
medash.isNumber(value: any): boolean
```
判断参数类型是否为`number`

**参数**  
1. `value`(any): 任意值
  
**返回**  
 `boolean`:参数类型为`number`时,返回`true`;否则返回`false`       
  
**例子**  

<me-embed>const {isNumber} = require("medash");
console.log(isNumber(1))//true
console.log(isNumber({}))//true
console.log(isNumber(undefined))//true
console.log(isNumber(null))//true</me-embed>