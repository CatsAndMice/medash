```ts
medash.when(pred: (param?: any) => boolean, whenTrue: (param?: any) => any | void)
```
返回一个接受一个参数的函数，如果它是真实的就运行一个回调函数，如果是假的就返回它。


* 返回一个函数，该函数期望返回基于 `pred` 的相应值 `x`  

```js
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
```
        
**例子**  
<me-embed>const {when} = require("medash")
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
console.log(doubleEvenNumbers(2)); // 4
console.log(doubleEvenNumbers(1)); // 1</me-embed>
