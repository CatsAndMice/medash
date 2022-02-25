```ts
medash.or(param1,param2);
```
或者,与`||`相同

**参数**  
1. `param1`(any): 参数1
2. `param2`(any): 参数2

  
**返回**  
`boolean`: `param1,param2`传入的参数存在为真时，返回`true`;否则返回`false`。        
  
**例子**  
<me-embed>const {or} = require("medash");
console.log(or(true, true))//true
console.log(or(false,true))//true
console.log(or({}, {}))//true
console.log(or(false, false))//false</me-embed>