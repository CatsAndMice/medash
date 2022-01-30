```js
medash.isUndefined(value:any): boolean 
```
传入的值是否为`undefined`


**参数**  
1. `value`(any): 需要判断是否为`undefined`的值 

**返回**  
`boolean:` 值为`undefined`返回`true`,否则返回`false`

**例子**
<me-embed>const {isUndefined} = require("medash");
console.log(isUndefined(0));//false
console.log(isUndefined(undefined));//true
console.log(isUndefined({}));//false
console.log(isUndefined([]));//false
console.log(isUndefined(''));//false</me-embed>