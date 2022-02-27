```ts
medash.randomNum(min: number, max: number): number 
```  
随机获取一个大于min，小于max的值

**参数**  
1. `min`( number ): 最小值
2. `max`( number ): 最大值

**返回**  
`number:`返回一个大于`min`小于`max`范围的随机值  

**例子**
<me-embed>const {randomNum} = require("medash");
console.log(randomNum(5,9));
console.log(randomNum(-10,0));
console.log(randomNum(1,9));</me-embed>