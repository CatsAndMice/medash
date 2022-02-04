```ts
medash.isNull(value:any): boolean 
```
传入的值是否为`null`


**参数**  
1. `value`(any): 需要判断是否为`null`的值 

**返回**  
`boolean:` 值为`null`返回`true`,否则返回`false`

**例子**
<me-embed>const {isNull} = require("medash");
console.log(isNull(null));//true
console.log(isNull(0));//false
console.log(isNull({}));//false
console.log(isNull([]));//false</me-embed>