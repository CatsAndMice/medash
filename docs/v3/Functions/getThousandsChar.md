```ts
medash.getThousandsChar(num: number, char: string = ','): string
```  
数字添加千位符

**参数**  
1. `num(number):`数字
2. `char(string):`分隔符，默认`,`

**返回**  
`string:` 返回一个千位符

**例子**
<me-embed>const {getThousandsChar} = require("medash");
console.log(getThousandsChar(1000000));//1,000,000
console.log(getThousandsChar(10000))//10,000
console.log(getThousandsChar(1000));//1,000
console.log(getThousandsChar(100));//100
console.log(getThousandsChar(10000,'-'));//10-000</me-embed>