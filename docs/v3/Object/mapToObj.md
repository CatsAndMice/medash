```ts
medash.mapToObj(map: Map<any, any>): Object | undefined
```
实例`Map`转化成`Object`对象

**参数**  
1. `map`(Map<any, any>): `Map`对象  

**返回**  
`Object | undefined`: `Object`对象或`undefined`    
  
**例子**  

<me-embed>const {mapToObj} = require("medash");
const num = 1
console.log( mapToObj(num))//undefined
console.log(mapToObj(new Map([[{ name: 1 }, 'obj'], [{ age: 2 }, 'obj']])))//{'[object Object]':'obj'}
console.log(mapToObj(new Map([[1, 2]])))//{1:2}</me-embed>