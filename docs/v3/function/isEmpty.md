```ts
medash.isEmpty(value: any):boolean
```
判断值是否为空  
`0,null,'',undefined,{},[]`参数值为其中之一,则认为参数值为空值

**参数**  
1. `value`(any): 需要判断的值

**返回**  
`boolean:`值等于`0,null,'',undefined,{},[] ,NaN`其中之一返回`true`,否则返回`false`

**例子**
<me-embed>
const {isEmpty} = require("medash");
console.log(isEmpty(''));//true
console.log(isEmpty(0));//true
console.log(isEmpty({}));//true
console.log(isEmpty([]));//true
console.log(isEmpty(NaN));//true
console.log(isEmpty(undefined));//true
console.log(isEmpty(null));//true
console.log(isEmpty(1));//false
</me-embed>