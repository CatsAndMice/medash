```ts
medash.isDate()
```


**参数**  
1. `value`(any): 
  
**返回**  
        
  
**例子**  

<me-embed>const  { isDate }  = require("medash")
console.log(isDate(''));//false
console.log(isDate(1));//false
console.log(isDate({}));//false
console.log(isDate(Date));//false
console.log(isDate(new Date()));//true




</me-embed>