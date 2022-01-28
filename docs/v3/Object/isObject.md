```js
medash.isObject(origin:any }):boolean
```
是否为对象类型,已排除`null`

**参数**  
1. `value`(any): 任意值
  
**返回**        
`boolean`: 参数类型为`object`,返回`true`;否则返回`false`。  

**例子**  


<me-embed>
const medash = require("medash");
console.log(medash.isObject({}));//true
console.log(medash.isObject([]));//false
console.log(medash.isObject(/^122$/));////false
console.log(medash.isObject(1));//false
console.log(medash.isObject({age:20}));//true
console.log(medash.isObject('1'));//false
console.log(medash.isObject(null));//false
console.log(medash.isObject(undefined));//false
</me-embed>

