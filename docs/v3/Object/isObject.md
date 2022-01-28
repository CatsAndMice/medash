```js
medash.isObject(origin:any }):boolean
```
是否为对象类型,已排除`null`

**参数**  
1. `value`(any): 任意值
  
**返回**        
`boolean`: 参数类型为`object`,返回`true`;否则返回`false`。  

**例子**  

```js
medash.isObject({})//true
medash.isObject([])//false
medash.isObject(/^122$/)//false
medash.isObject(1)//false
medash.isObject('1')//false
medash.isObject(null)//false
medash.isObject(undefined)//false
```    

<!-- anywhere else on your page -->
<div id="my-element">
const medash = require("medash");
console.log(medash.isObject({}));//true
console.log(medash.isObject([]));//false
console.log(medash.isObject(/^122$/));////false
console.log(medash.isObject(1));//false
console.log(medash.isObject('1'));//false
console.log(medash.isObject(null));//false
console.log(medash.isObject(undefined));//false
</div>

