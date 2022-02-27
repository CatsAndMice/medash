```ts
medash.lt(value: number , target: number ): boolean
```
前者值是否小于后者

**参数**  
1. `value`(number): 要比较的值。
2. `target`( number): 另一个要比较的值。

**返回**  
`boolean:`前者值小于后者值返回`true`,否则返回`false` 

**例子**
<me-embed>const {lt} = require('medash');
console.log(lt(1, 2))//true
console.log(lt('1', 2))//true
console.log(lt('2',0))//false
console.log(lt(2,-2))//false</me-embed>