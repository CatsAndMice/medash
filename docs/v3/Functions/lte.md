```ts
medash.lte(value: number , target: number ): boolean
```
前者值是否小于或等于后者

**参数**  
1. `value`( number): 要比较的值。
2. `target`( number): 另一个要比较的值。

**返回**  
`boolean:`前者值小于或等于后者值返回`true`,否则返回`false` 

**例子**  

<me-embed>const {lte} = require("medash");
console.log(lte(1, 1));//true
console.log(lte(2, 1));//false
console.log(lte(0, 1));//true
console.log(lte(-1,0));//true</me-embed>