```ts
medash.gt(value: number, target: number):boolean
```  
前者是否大于后者

**参数**  
1. `value`( number): 要比较的值。
2. `target`( number): 另一个要比较的值

**返回**  
`boolean:`前者值大于后者值返回`true`,否则返回`false` 

**例子**
<me-embed>const {gt} = require("medash");
console.log(gt(1, 2))//false
console.log(gt('1', 2))//false
console.log(gt('2',0))//true
console.log(gt(2,-2))//true</me-embed>