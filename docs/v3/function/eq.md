```js
medash.eq(value: any, target: any):boolean
```  
比较两者是否相等,引用类型特别处理,循环递归比较`key,value`值完全相等才会认为相等。其中函数类型会首先向字符串转化然后再进行比较

**参数**  
1. `value`(any): 要比较的值。
2. `target`(any): 另一个要比较的值

**返回**  
`boolean:` 值相等返回`true`,否则返回`false` 

**例子**
<me-embed>const {eq} = require("medash");
console.log(eq('eq','str'))//false
console.log(eq({},{}))//true
console.log(eq({},{name:'medash'}))//false
console.log(eq({name:'medash'},{name:'medash'}))//true
console.log(eq(()=>{},()=>{}));//true
console.log(eq(()=>console.log(1),()=>{}));//false</me-embed>


