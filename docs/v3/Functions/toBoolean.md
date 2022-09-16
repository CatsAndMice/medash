```ts
medash.toBoolean(value:any):boolean
```

将参数转化成`Boolean`类型，若参数为`0、FALSE、false、NaN、undefined`均会返回`false`
  
**添加版本**  
v3.4.0

**参数**   
value(any):任意类型值

**返回**  
(boolean): true/false

**例子**  
<me-embed>const  { toBoolean }  = require("medash")</me-embed>  
