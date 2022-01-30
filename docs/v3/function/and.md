```js
medash.and(param1,param2);
```
并且,与`&&`相同

**参数**  
1. `param1`(any): 参数1
2. `param2`(any): 参数2

  
**返回**  
`boolean`: `param1,param2`传入的参数均为真时，返回`true`;否则返回`false`。        
  
**例子**  
<me-embed>const {and} = require("medash");
console.log(and(true, true))//true
console.log(and(false,true))//false
console.log(and({}, {}))//true</me-embed>
