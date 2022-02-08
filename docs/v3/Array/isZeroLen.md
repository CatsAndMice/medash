```ts
medash.isZeroLen(args: any[]): boolean
```
数组长度是否为0

**参数**  
1. `args`(any[]): 数组
  
**返回**        
`boolean`:数组长度为0,返回`true`,否则返回`false`

**例子**  
<me-embed>const {isZeroLen} = require("medash");
console.log(isZeroLen([]));//true
console.log(isZeroLen([1]));//false
console.log(isZeroLen(null));//false
console.log(isZeroLen(undefined));//false</me-embed>
