```ts
medash.isDate()
```
判断是否`Date`对象类型

**参数**  
1. `date`(any):任意参数值
  
**返回**  
`boolean`        
  
**例子**  

<me-embed>const  { isDate }  = require("medash")
console.log(isDate(''));//false
console.log(isDate(1));//false
console.log(isDate({}));//false
console.log(isDate(Date));//false
console.log(isDate(new Date()));//true




</me-embed>