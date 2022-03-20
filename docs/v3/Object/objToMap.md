```ts
medash.objToMap(value: Object): Map<string, any> 
```
纯对象转化成`Map`对象类型

**参数**  
1. `value`(Object): 对象
  
**返回**  
`Map<string, any>`: `Map`对象        
  
**例子**  

<me-embed>const {objToMap} = require("medash");
const obj = { one: 1, two: 2 };
const map = objToMap(obj);
console.log(map)</me-embed>