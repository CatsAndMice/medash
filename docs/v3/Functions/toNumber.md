```ts
medash.toNumber(value: unknown)
```
将参数转化成`number`类型。
空值统一转化成`0`,`0,null,'',undefined,{},[]`表示空值

**参数**  
1. `value`(unknown): 任意值

**返回**  
`number:`返回数字 

**例子**
<me-embed>const {toNumber} = require("medash");
console.log(toNumber(''));//0
console.log(toNumber(0));//0
console.log(toNumber([]));//0
console.log(toNumber(''));//0
console.log(toNumber('-200'));//-200
console.log(toNumber('-20s0'));//-20
console.log(toNumber([1]));//1
console.log(toNumber('p'));//NaN</me-embed>