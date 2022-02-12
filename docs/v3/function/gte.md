```ts
medash.gt(value: number | string, target: number |string):boolean
```  
前者值是否大于或等于后者

**参数**  
1. `value`( number | string): 要比较的值。
2. `target`( number | string): 另一个要比较的值

**返回**  
`boolean:`前者值大于或等于后者值返回`true`,否则返回`false` 
        
  
**例子**  

<me-embed>const {gte} = require("medash");
console.log(gte(1, 1));//true
console.log(gte(2, 1));//true
console.log(gte(0, 1));//false
console.log(gte(-1,0));//false</me-embed>