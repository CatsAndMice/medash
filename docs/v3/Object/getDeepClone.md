```ts
medash.getDeepClone(origin: { [key: string]: any } | any[])
```
深克隆对象或数组 

**参数**  
1. `origin`: 被克隆的对象或数组
 
**返回**        
 `Object|Array`:返回一个深克隆的对象或数组

**例子**  

<me-embed>const medash = require("medash");
let arr = [{ name: 20 }, 1, [2]]
let clone = medash.getDeepClone(arr)
console.log(arr[1] === clone[1]);//true
console.log(arr[0] === clone[0]);//false</me-embed>

