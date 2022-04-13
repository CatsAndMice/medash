```ts
medash.isStr(str: unknown): boolean 
```
判断类型是否为`string`

**参数**  
1. `str`(unknown): 任意值

**返回**  
`boolean:` 参数类型为`string`,符合规则返回`true`,否则返回`false`  

**例子**
<me-embed>const {isStr} = require("medash");
console.log(isStr(''));//true
console.log(isStr(0));//false
console.log(isStr([]));//false</me-embed>